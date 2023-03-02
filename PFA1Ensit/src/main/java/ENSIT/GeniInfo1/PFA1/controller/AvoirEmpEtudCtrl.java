package ENSIT.GeniInfo1.PFA1.controller;

import ENSIT.GeniInfo1.PFA1.model.AvoirEmpEtud;
import ENSIT.GeniInfo1.PFA1.service.AvoirEmpEtudService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/AvoirEmpEtud")
public class AvoirEmpEtudCtrl {
    private final AvoirEmpEtudService AvoirEmpEtudService;
    public AvoirEmpEtudCtrl(AvoirEmpEtudService AvoirEmpEtudService){this.AvoirEmpEtudService = AvoirEmpEtudService;}

    @GetMapping("/all")
    public ResponseEntity<List<AvoirEmpEtud>> getAllAvoirEmpEtuds (){
        List<AvoirEmpEtud> AvoirEmpEtuds= this.AvoirEmpEtudService.findAllAvoirEmpEtud();
        return new ResponseEntity<>(AvoirEmpEtuds, HttpStatus.OK);
    }

    @GetMapping("/find/{id}")
    public ResponseEntity<AvoirEmpEtud> getAvoirEmpEtudsById (@PathVariable("id") Integer id){
        AvoirEmpEtud AvoirEmpEtuds = this.AvoirEmpEtudService.findAvoirEmpEtudById(id);
        return new ResponseEntity<>(AvoirEmpEtuds,HttpStatus.OK);
    }

    @PostMapping("/add")
    public ResponseEntity<AvoirEmpEtud> addAvoirEmpEtuds (@RequestBody AvoirEmpEtud AvoirEmpEtuds){
        AvoirEmpEtud newAvoirEmpEtuds = this.AvoirEmpEtudService.addAvoirEmpEtud(AvoirEmpEtuds);
        return new ResponseEntity<>(newAvoirEmpEtuds, HttpStatus.CREATED);
    }

    @PutMapping("/update")
    public ResponseEntity<AvoirEmpEtud> updateAvoirEmpEtuds (@RequestBody AvoirEmpEtud AvoirEmpEtuds){
        AvoirEmpEtud updateAvoirEmpEtuds = this.AvoirEmpEtudService.updateAvoirEmpEtud(AvoirEmpEtuds);
        return new ResponseEntity<>(updateAvoirEmpEtuds,HttpStatus.OK);
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<?> deleteAvoirEmpEtudsById (@PathVariable("id") Integer id){
        this.AvoirEmpEtudService.deleteAvoirEmpEtud(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }

}
