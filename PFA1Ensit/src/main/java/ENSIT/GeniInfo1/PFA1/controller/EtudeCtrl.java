package ENSIT.GeniInfo1.PFA1.controller;

import ENSIT.GeniInfo1.PFA1.model.Etude;
import ENSIT.GeniInfo1.PFA1.service.EtudeService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/Etude")
public class EtudeCtrl {
    private final EtudeService EtudeService;
    public EtudeCtrl(EtudeService EtudeService){this.EtudeService = EtudeService;}

    @GetMapping("/all")
    public ResponseEntity<List<Etude>> getAllEtudes (){
        List<Etude> Etudes= this.EtudeService.findAllEtude();
        return new ResponseEntity<>(Etudes, HttpStatus.OK);
    }

    @GetMapping("/find/{id}")
    public ResponseEntity<Etude> getEtudesById (@PathVariable("id") Integer id){
        Etude Etudes = this.EtudeService.findEtudeById(id);
        return new ResponseEntity<>(Etudes,HttpStatus.OK);
    }

    @PostMapping("/add")
    public ResponseEntity<Etude> addEtudes (@RequestBody Etude Etudes){
        Etude newEtudes = this.EtudeService.addEtude(Etudes);
        return new ResponseEntity<>(newEtudes, HttpStatus.CREATED);
    }

    @PutMapping("/update")
    public ResponseEntity<Etude> updateEtudes (@RequestBody Etude Etudes){
        Etude updateEtudes = this.EtudeService.updateEtude(Etudes);
        return new ResponseEntity<>(updateEtudes,HttpStatus.OK);
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<?> deleteEtudesById (@PathVariable("id") Integer id){
        this.EtudeService.deleteEtude(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }

}
