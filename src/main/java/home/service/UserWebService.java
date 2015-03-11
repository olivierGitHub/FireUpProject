package home.service;

import home.User;
import home.dataAccess.DaoUser;

import javax.ws.rs.*;
import javax.ws.rs.core.MediaType;

/**
 * Created by oliver on 17/12/14.
 */
@Path("/user")
public class UserWebService {

    @GET
    @Path("/create")
    @Produces(MediaType.APPLICATION_JSON)
    public int createUser(@QueryParam("usernameSignup") String username,
                          @QueryParam("passwordSignup") String password){
        User user = new User();
            user.setUsername(username);
            user.setPassword(password);
        return DaoUser.getInstance().create(user);
    }


    @GET
    @Path("/login")
    @Produces(MediaType.APPLICATION_JSON)
    public boolean authenticateUser(@QueryParam("usernameSignin") String username,
                                    @QueryParam("passwordSignin") String password){
        User user = new User();
            user.setUsername(username);
            user.setPassword(password);
        return DaoUser.getInstance().authenticateUser(user);
    }
}
