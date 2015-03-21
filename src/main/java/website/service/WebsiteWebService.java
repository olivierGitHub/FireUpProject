package website.service;

import website.Website;
import website.dataAccess.DaoWebsite;

import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.QueryParam;
import javax.ws.rs.core.MediaType;

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

}
