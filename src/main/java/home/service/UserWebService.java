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

    @POST
    @Path("/signup")
    @Produces(MediaType.APPLICATION_JSON)
    public int createUser(@QueryParam("usernameSignup") String username,
                          @QueryParam("passwordSignup") String password){
        User user = new User();
            user.setUsername(username);
            user.setPassword(password);
        return DaoUser.getInstance().create(user);
    }


    @POST
    @Path("/signin")
    @Produces(MediaType.APPLICATION_JSON)
    public User authenticateUser(@QueryParam("usernameSignin") String username,
                                 @QueryParam("passwordSignin") String password){

        return DaoUser.getInstance().authenticateUser(username,password);
    }
}
