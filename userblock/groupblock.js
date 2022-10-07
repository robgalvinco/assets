if(typeof(Thinkific.current_user)!="undefined"){
    Thinkific.current_user.groups.forEach(function(group){
        var group_name = group.name.toLowerCase();
        //console.log(group,group_name)
        if(group_name.includes("block") && group_name.includes("https://")){
            //console.log("blocking",group_name);
            var matches = group_name.match(/\bhttps?:\/\/\S+/gi);
            //console.log(matches);
            var sorry_url = matches[0];
            window.location = sorry_url;
        }
    })
}
