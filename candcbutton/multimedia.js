window.__candcmm_block = {
    blockall: false,
    blockdomains: ["typeform.com","google.com"]
}
$(document).ready(function(){
    if(typeof(CoursePlayerV2) !== 'undefined') {
      CoursePlayerV2.on('hooks:contentDidChange', function(data) {
          $('#course-player-footer').show();
        console.log("content changed",data);
        var lesson = data.lesson;
        console.log("lesson",lesson);
        if(lesson.contentable_type=="Iframe"){
            console.log(window.__candcmm_block);
            if(window.__candcmm_block.blockall){
                $('#course-player-footer').hide();
            } else {
                // see if source_url is in blocklist
                var source_url = lesson.source_url;
                window.__candcmm_block.blockdomains.forEach(function(domain){
                    if(source_url.includes(domain)){
                        $('#course-player-footer').hide();
                    }
                })
            }
        }
      });
    }
    
})