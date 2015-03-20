package video.dataAccess;

import com.dao.DAO;
import video.Video;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.EntityTransaction;
import javax.persistence.Persistence;
import java.util.List;

/**
 * Created by oliver on 20/03/15.
 */
public class DaoVideo implements DAO<Video> {

    private static DaoVideo instance = new DaoVideo();
    private static DaoVideo getInstance(){
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
    public void delete(Video obj) {

    }

    @Override
    public List<Video> readSelected(String sql) {
        return null;
    }
}
