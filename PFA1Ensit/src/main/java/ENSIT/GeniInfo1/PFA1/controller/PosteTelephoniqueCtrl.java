package ENSIT.GeniInfo1.PFA1.controller;

import ENSIT.GeniInfo1.PFA1.model.PosteTelephonique;
import ENSIT.GeniInfo1.PFA1.service.PosteTelephoniqueService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/PosteTelephonique")
public class PosteTelephoniqueCtrl {
    private final PosteTelephoniqueService PosteTelephoniqueService;
    public PosteTelephoniqueCtrl(PosteTelephoniqueService PosteTelephoniqueService){this.PosteTelephoniqueService = PosteTelephoniqueService;}

    @GetMapping("/all")
    public ResponseEntity<List<PosteTelephonique>> getAllPosteTelephoniques (){
        List<PosteTelephonique> PosteTelephoniques= this.PosteTelephoniqueService.findAllPosteTelephonique();
        return new ResponseEntity<>(PosteTelephoniques, HttpStatus.OK);
    }

    @GetMapping("/find/{id}")
    public ResponseEntity<PosteTelephonique> getPosteTelephoniquesById (@PathVariable("id") Integer id){
        PosteTelephonique PosteTelephoniques = this.PosteTelephoniqueService.findPosteTelephoniqueById(id);
        return new ResponseEntity<>(PosteTelephoniques,HttpStatus.OK);
    }

    @PostMapping("/add")
    public ResponseEntity<PosteTelephonique> addPosteTelephoniques (@RequestBody PosteTelephonique PosteTelephoniques){
        PosteTelephonique newPosteTelephoniques = this.PosteTelephoniqueService.addPosteTelephonique(PosteTelephoniques);
        return new ResponseEntity<>(newPosteTelephoniques, HttpStatus.CREATED);
    }

    @PutMapping("/update")
    public ResponseEntity<PosteTelephonique> updatePosteTelephoniques (@RequestBody PosteTelephonique PosteTelephoniques){
        PosteTelephonique updatePosteTelephoniques = this.PosteTelephoniqueService.updatePosteTelephonique(PosteTelephoniques);
        return new ResponseEntity<>(updatePosteTelephoniques,HttpStatus.OK);
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<?> deletePosteTelephoniquesById (@PathVariable("id") Integer id){
        this.PosteTelephoniqueService.deletePosteTelephonique(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }

}
