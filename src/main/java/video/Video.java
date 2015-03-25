package video;

import com.sun.xml.internal.txw2.annotation.XmlElement;


import javax.persistence.*;

/**
 * Created by oliver on 20/03/15.
 */

@Entity
@XmlElement
public class Video {

    @Id
    @GeneratedValue
    private int idVideo;
    private String titleVideo;
    private String descriptionVideo;
    private String linkVideo;
    private String shortLinkVideo;
    private String listTagsVideo;

    public int getIdVideo() {
        return idVideo;
    }

    public String getTitleVideo() {
        return titleVideo;
    }
    public void setTitleVideo(String titleVideo) {
        this.titleVideo = titleVideo;
    }

    public String getDescriptionVideo() {
        return descriptionVideo;
    }
    public void setDescriptionVideo(String descriptionVideo) {
        this.descriptionVideo = descriptionVideo;
    }

    public String getShortLinkVideo() {
        return shortLinkVideo;
    }
    public void setShortLinkVideo(String shortLinkVideo) {
        this.shortLinkVideo = shortLinkVideo;
    }

    public String getLinkVideo() {
        return linkVideo;
    }
    public void setLinkVideo(String linkVideo) {
        this.linkVideo = linkVideo;
    }

    public String getListTagsVideo() {
        return listTagsVideo;
    }
    public void setListTagsVideo(String listTagsVideo) {
        this.listTagsVideo = listTagsVideo;
    }

}
