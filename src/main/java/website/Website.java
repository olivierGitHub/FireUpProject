package website;

import com.sun.xml.internal.txw2.annotation.XmlElement;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.xml.bind.annotation.XmlRootElement;

/**
 * Created by oliver on 20/03/15.
 */

@Entity
@XmlRootElement
public class Website {

    @Id
    @GeneratedValue
    private int idWebsite;
    private String titleWebsite;
    private String descriptionWebsite;
    private String linkWebsite;
    private String listTagsWebsite;

    public int getIdWebsite() {
        return idWebsite;
    }

    public String getTitleWebsite() {
        return titleWebsite;
    }
    public void setTitleWebsite(String titleWebsite) {
        this.titleWebsite = titleWebsite;
    }

    public String getDescriptionWebsite() {
        return descriptionWebsite;
    }
    public void setDescriptionWebsite(String descriptionWebsite) {
        this.descriptionWebsite = descriptionWebsite;
    }

    public String getLinkWebsite() {
        return linkWebsite;
    }
    public void setLinkWebsite(String linkWebsite) {
        this.linkWebsite = linkWebsite;
    }

    public String getListTagsWebsite() {
        return listTagsWebsite;
    }
    public void setListTagsWebsite(String listTagsWebsite) {
        this.listTagsWebsite = listTagsWebsite;
    }
}
