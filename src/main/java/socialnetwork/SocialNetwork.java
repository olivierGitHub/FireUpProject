package socialnetwork;

import com.sun.xml.internal.txw2.annotation.XmlElement;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

/**
 * Created by oliver on 20/03/15.
 */

@Entity
@XmlElement
public class SocialNetwork {

    @Id
    @GeneratedValue
    private int idSocialNetwork;
    private String titleSocialNetwork;
    private String descriptionSocialNetwork;
    private String linkSocialNetwork;
    private String listTagsSocialNetwork;

    public int getIdSocialNetwork() {
        return idSocialNetwork;
    }

    public String getTitleSocialNetwork() {
        return titleSocialNetwork;
    }
    public void setTitleSocialNetwork(String titleSocialNetwork) {
        this.titleSocialNetwork = titleSocialNetwork;
    }

    public String getDescriptionSocialNetwork() {
        return descriptionSocialNetwork;
    }
    public void setDescriptionSocialNetwork(String descriptionSocialNetwork) {
        this.descriptionSocialNetwork = descriptionSocialNetwork;
    }

    public String getLinkSocialNetwork() {
        return linkSocialNetwork;
    }
    public void setLinkSocialNetwork(String linkSocialNetwork) {
        this.linkSocialNetwork = linkSocialNetwork;
    }

    public String getListTagsSocialNetwork() {
        return listTagsSocialNetwork;
    }
    public void setListTagsSocialNetwork(String listTagsSocialNetwork) {
        this.listTagsSocialNetwork = listTagsSocialNetwork;
    }
}