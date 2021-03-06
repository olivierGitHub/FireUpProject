package video.dataAccess;

import com.dao.DAO;
import video.Video;

import javax.persistence.*;
import java.util.List;
import java.util.StringTokenizer;

/**
 * Created by oliver on 20/03/15.
 */
public class DaoVideo implements DAO<Video> {

    private static DaoVideo instance = new DaoVideo();
    public static DaoVideo getInstance(){
        return instance;
    }
    private EntityManagerFactory emf;
    private DaoVideo(){
        emf = Persistence.createEntityManagerFactory("NewPersistenceUnit");
    }

    @Override
    public int create(Video video) {
        EntityManager em = emf.createEntityManager();
        EntityTransaction t = em.getTransaction();
        int id = 0;

        try{
            t.begin();
            em.persist(video);
            em.flush();
            id = video.getIdVideo();
            t.commit();
        }catch(Exception e){
            e.printStackTrace();;
        }finally{
            if (t.isActive()){
                t.rollback();
                em.close();
            }
        }
        return id;
    }

    @Override
    public Video read(int id) {
        EntityManager em = emf.createEntityManager();
        EntityTransaction t = em.getTransaction();
        Video video = null;

        try{
            t.begin();
            video = em.find(Video.class,id);
            t.commit();
        }catch(Exception e){
            e.printStackTrace();
        }finally{
            if (t.isActive()){
                t.rollback();
                em.close();
            }
        }
        return video;
    }

    @Override
    public void update(int id) {
        EntityManager em = emf.createEntityManager();
        EntityTransaction t = em.getTransaction();

        try{
            t.begin();
            Video video = em.find(Video.class,id);
            em.merge(video);
            t.commit();
        }catch(Exception e){
            e.printStackTrace();
        }finally{
            if (t.isActive()){
                t.rollback();
                em.close();
            }
        }
    }

    @Override
    public void delete(Video video) {
        EntityManager em = emf.createEntityManager();
        EntityTransaction t = em.getTransaction();

        try{
            t.begin();
            em.remove(video);
            t.commit();
        }catch(Exception e){
            e.printStackTrace();
        }finally{
            if (t.isActive()){
                t.rollback();
                em.close();
            }
        }
    }

    private String createSQL(String sql){
        String createdSQL = "select * from video where listTagsVideo like '%dummyArequestBtoCsetDfirstEiteratioFnotGsupposedHtoIbeJfound%'";
        StringTokenizer st = new StringTokenizer(sql);
        while (st.hasMoreElements()) {
            createdSQL = createdSQL + " or listTagsVideo like '%" + st.nextElement() + "%'";
        }
        return createdSQL;
    }

    @Override
    public List<Video> readSelected(String param) {
        EntityManager em = emf.createEntityManager();
        EntityTransaction t = em.getTransaction();
        List<Video> listVideos = null;

        try{
            t.begin();
            String sql = createSQL(param);
            Query query = em.createNativeQuery(sql, Video.class);
            listVideos = query.getResultList();
            t.commit();
        }catch(Exception e){
            e.printStackTrace();
        }finally{
            if (t.isActive()){
                t.rollback();
                em.close();
            }
        }
        return listVideos;
    }


    public List<Video> readAll() {
        EntityManager em = emf.createEntityManager();
        EntityTransaction t = em.getTransaction();
        List<Video> listVideos = null;

        try{
            t.begin();
            String sql = "select v from Video v order by idVideo DESC";
            TypedQuery query = em.createQuery(sql, Video.class).setMaxResults(5);
            listVideos = query.getResultList();
            t.commit();
        }catch(Exception e){
            e.printStackTrace();
        }finally{
            if (t.isActive()){
                t.rollback();
                em.close();
            }
        }
        return listVideos;
    }
}
