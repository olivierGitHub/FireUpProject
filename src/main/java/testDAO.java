import home.User;
import home.dataAccess.DaoUser;

import java.util.Date;

/**
 * Created by oliver on 23/01/15.
 */
public class testDAO {


    public static void main(String[] args){
        User user = new User();
            user.setUsername("terry");
            user.setPassword("fatal");
            user.setFirstname("terry");
            user.setLastname("bogard");
            user.setBirthday(new Date(75,11,4));
        int id = DaoUser.getInstance().create(user);
        System.out.println(id);

        User user2 = DaoUser.getInstance().read(1);
            System.out.println("Username:" + user2.getUsername());
            System.out.println("Password:" + user2.getPassword());
            System.out.println("Firstname:" + user2.getFirstname());
            System.out.println("Lastname:" + user2.getLastname());
            System.out.println("Birthday:" + user2.getBirthday());

//        user.setFirstname("andy");
//        DaoUser.getInstance().update(user);

        //DaoUser.getInstance().delete(user);
    }
}
