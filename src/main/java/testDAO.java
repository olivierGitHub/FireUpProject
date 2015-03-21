import home.User;
import home.dataAccess.DaoUser;
import org.hibernate.annotations.SourceType;
import socialnetwork.SocialNetwork;
import socialnetwork.dataAccess.DaoSocialNetwork;
import video.Video;
import video.dataAccess.DaoVideo;
import website.Website;
import website.dataAccess.DaoWebsite;

import java.util.Date;

/**
 * Created by oliver on 23/01/15.
 */
public class testDAO {


    public static void main(String[] args){
        Video video = new Video();
            video.setTitleVideo("Gokou vs Bejita");
            video.setDescriptionVideo("first fight");
            video.setLinkVideo("www.youtube.com/gokouvsbejita");
            video.setListTagsVideo("gokou bejita saiyan");
        System.out.println("Video id: " + DaoVideo.getInstance().create(video));

        Website website = new Website();
            website.setTitleWebsite("youtube");
            website.setDescriptionWebsite("videos sharing");
            website.setLinkWebsite("www.youtube.com");
            website.setListTagsWebsite("video sharing community");
        System.out.println("Website id: " + DaoWebsite.getInstance().create(website));

        SocialNetwork socialNetwork = new SocialNetwork();
            socialNetwork.setTitleSocialNetwork("Facebook");
            socialNetwork.setDescriptionSocialNetwork("community");
            socialNetwork.setLinkSocialNetwork("www.facebook.com");
            socialNetwork.setListTagsSocialNetwork("people friends");
        System.out.println("Social Network id: " + DaoSocialNetwork.getInstance().create(socialNetwork));
    }
}
