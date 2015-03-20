package website;

import javax.persistence.Id;

/**
 * Created by oliver on 20/03/15.
 */
public class Website {

    @Id
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
