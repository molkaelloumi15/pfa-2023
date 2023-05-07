package ENSIT.GeniInfo1.PFA1.service;

import ENSIT.GeniInfo1.PFA1.Exception.UserNotFoundException;
import ENSIT.GeniInfo1.PFA1.model.PosteTelephonique;
import ENSIT.GeniInfo1.PFA1.repository.PosteTelephoniqueRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PosteTelephoniqueService {

    private final PosteTelephoniqueRepo PosteTelephoniqueRepo;

    @Autowired

    public PosteTelephoniqueService(PosteTelephoniqueRepo PosteTelephoniqueRepo) {this.PosteTelephoniqueRepo = PosteTelephoniqueRepo;}

    public PosteTelephonique addPosteTelephonique(PosteTelephonique PosteTelephonique) {return this.PosteTelephoniqueRepo.save(PosteTelephonique);}

    public PosteTelephonique findPosteTelephoniqueById (Integer id) { return this.PosteTelephoniqueRepo.findById(id).orElseThrow(() -> new UserNotFoundException("PosteTelephonique with the id = " + id + " was not found"));}

    public List<PosteTelephonique> findAllPosteTelephonique() {return this.PosteTelephoniqueRepo.findAll();}

    public PosteTelephonique updatePosteTelephonique(PosteTelephonique PosteTelephonique) {return PosteTelephoniqueRepo.save(PosteTelephonique);}

    public void deletePosteTelephonique(Integer id) {this.PosteTelephoniqueRepo.deleteById(id);}

}
