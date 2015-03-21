package socialnetwork.service;

import socialnetwork.SocialNetwork;
import socialnetwork.dataAccess.DaoSocialNetwork;

import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.QueryParam;
import javax.ws.rs.core.MediaType;

/**
 * Created by oliver on 20/03/15.
 */

@Path("/socialnetwork")
public class SocialNetworkWebService {

    @POST
    @Path("/create")
    @Produces(MediaType.APPLICATION_JSON)
    public int createVideo(
            @QueryParam("titleSocialNetwork") String title,
            @QueryParam("descriptionSocialNetwork") String description,
            @QueryParam("linkSocialNetwork") String link,
            @QueryParam("listTagsSocialNetwork") String listTags){
    SocialNetwork socialNetwork = new SocialNetwork();
        socialNetwork.setTitleSocialNetwork(title);
        socialNetwork.setDescriptionSocialNetwork(description);
        socialNetwork.setLinkSocialNetwork(link);
        socialNetwork.setListTagsSocialNetwork(listTags);
    return DaoSocialNetwork.getInstance().create(socialNetwork);
    }

}
