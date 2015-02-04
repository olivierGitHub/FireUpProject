package home.service;

import home.User;
import home.dataAccess.DaoUser;

import javax.ws.rs.Consumes;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

/**
 * Created by oliver on 17/12/14.
 */
@Path("/user")
public class UserWebService {

    @POST
    @Path("/create")
    @Consumes(MediaType.APPLICATION_JSON)
    @Produces(MediaType.APPLICATION_JSON)
    public int createUser(User user){
        return DaoUser.getInstance().create(user);
    }


    @POST
    @Path("/login")
    @Consumes(MediaType.APPLICATION_JSON)
    @Produces(MediaType.APPLICATION_JSON)
    public boolean authenticateUser(User user){
        return DaoUser.getInstance().authenticateUser(user);
    }
}
