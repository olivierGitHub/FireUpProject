package website.service;

import video.Video;
import video.dataAccess.DaoVideo;
import website.Website;
import website.dataAccess.DaoWebsite;

import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.QueryParam;
import javax.ws.rs.core.MediaType;
import java.util.List;

/**
 * Created by oliver on 20/03/15.
 */
@Path("/website")
public class WebsiteWebService {

    @POST
    @Path("/create")
    @Produces(MediaType.APPLICATION_JSON)
    public int createVideo(
            @QueryParam("titleWebsite") String title,
            @QueryParam("descriptionWebsite") String description,
            @QueryParam("linkWebsite") String link,
            @QueryParam("listTagsWebsite") String listTags){
        Website website = new Website();
            website.setTitleWebsite(title);
            website.setDescriptionWebsite(description);
            website.setLinkWebsite(link);
            website.setListTagsWebsite(listTags);
        return DaoWebsite.getInstance().create(website);
    }

    @POST
    @Path("/display")
    @Produces(MediaType.APPLICATION_JSON)
    public List<Website> displayWebsites(@QueryParam("searchParams") String searchParams){
        return DaoWebsite.getInstance().readAll();
    }


    @POST
    @Path("/displaySelected")
    @Produces(MediaType.APPLICATION_JSON)
    public List<Website> displaySelectedWebsites(@QueryParam("searchParams") String searchParams){
        return DaoWebsite.getInstance().readSelected(searchParams);
    }

}
