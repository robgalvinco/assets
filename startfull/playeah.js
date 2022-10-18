$(document).ready(function(){
    if(typeof(CoursePlayerV2) !== 'undefined') {
        var did_it = false;
        CoursePlayerV2.on('hooks:contentDidChange', function(data) {
            if(!did_it){
                $(".course-player__content-header__action-fullscreen").click();
                did_it=true;    
            }
        });
    }
}); 