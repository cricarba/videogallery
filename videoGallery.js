(function (videoGallery) {

    videoGallery.Config = function (data) {
        videoGallery.VideoTrackList = data.VideoTrackList;
        videoGallery.VideoTrackListThumbnail = data.VideoTrackListThumbnail;
        videoGallery.IdVideoPlayer = data.IdVideoPlayer;
        videoGallery.IdGallery = data.IdGallery;
    }

    videoGallery.Init = function () {
        var firstVideo = videoGallery.VideoTrackList[0];
        $("#" + videoGallery.IdVideoPlayer).attr("src", firstVideo.Link);
        for (var i = 0; i < videoGallery.VideoTrackList.length; i++) {
            var template ="<div class='row' onclick='videoGallery.Play(" + i + ")'><div class='col-xs-4' > " +
                    "<div class='embed-responsive embed-responsive-4by3' style='border: 1px #ccc solid' >" +
                    "  <img class='embed-responsive-item' src='" + videoGallery.VideoTrackListThumbnail[i].Link + "'></img></div></div>" +
                    "<div class='col-xs-8'><label class='text-danger'>" + videoGallery.VideoTrackListThumbnail[i].Name + "</label></div></div></br>"
            ;
            $("#" + videoGallery.IdGallery).append(template);
        }
    }



    videoGallery.Play = function (indexVideo) {
        $("#" + videoGallery.IdVideoPlayer).attr("src", videoGallery.VideoTrackList[indexVideo].Link);
    }
}(window.videoGallery = window.videoGallery || {}));