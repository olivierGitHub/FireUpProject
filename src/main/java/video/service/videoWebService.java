package video.service;

import video.Video;
import video.dataAccess.DaoVideo;

import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.QueryParam;
import javax.ws.rs.core.MediaType;
import java.awt.*;

/**
 * Created by oliver on 20/03/15.
 */
@Path("/video")
public class VideoWebService {

    @POST
    @Path("/create")
    @Produces(MediaType.APPLICATION_JSON)
    public int createVideo(
                        @QueryParam("titleVideo") String title,
                        @QueryParam("descriptionVideo") String description,
                        @QueryParam("linkVideo") String link,
                        @QueryParam("listTagsVideo") String listTags){
        Video video = new Video();
            video.setTitleVideo(title);
            video.setDescriptionVideo(description);
            video.setLinkVideo(link);
            video.setListTagsVideo(listTags);
        return DaoVideo.getInstance().create(video);
    }

}