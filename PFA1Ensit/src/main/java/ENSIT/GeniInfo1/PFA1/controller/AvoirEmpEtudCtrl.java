package ENSIT.GeniInfo1.PFA1.controller;

import ENSIT.GeniInfo1.PFA1.model.AvoirEmpEtud;
import ENSIT.GeniInfo1.PFA1.model.Employe;
import ENSIT.GeniInfo1.PFA1.model.Etude;
import ENSIT.GeniInfo1.PFA1.service.AvoirEmpEtudService;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;
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

    @GetMapping("/emp/{emp}")
    public ResponseEntity<List<AvoirEmpEtud>> getAllAvoirEmpEtudsByEmp (@PathVariable("emp") Integer emp){
        List<AvoirEmpEtud> AvoirEmpEtuds= this.AvoirEmpEtudService.findAllByEmp(emp);
        return new ResponseEntity<>(AvoirEmpEtuds, HttpStatus.OK);
    }

    @GetMapping("/etu/{etu}")
    public ResponseEntity<List<AvoirEmpEtud>> getAllAvoirEmpEtudsByEtud (@PathVariable("etu") Integer etu){
        List<AvoirEmpEtud> AvoirEmpEtuds= this.AvoirEmpEtudService.findAllByEtud(etu);
        return new ResponseEntity<>(AvoirEmpEtuds, HttpStatus.OK);
    }

//    @GetMapping("/find/{id}")
//    public ResponseEntity<AvoirEmpEtud> getAvoirEmpEtudsById (@PathVariable("id") Integer id){
//        AvoirEmpEtud AvoirEmpEtuds = this.AvoirEmpEtudService.findAvoirEmpEtudById(id);
//        return new ResponseEntity<>(AvoirEmpEtuds,HttpStatus.OK);
//    }

    @GetMapping("/find/{numEmp}/{idEtude}/{year}")
    public ResponseEntity<AvoirEmpEtud> getAvoirEmpEtudsById(@PathVariable("numEmp") Integer numEmp, @PathVariable("idEtude") Integer idEtude, @PathVariable("year") Integer year) {
        AvoirEmpEtud AvoirEmpEtuds = this.AvoirEmpEtudService.findAvoirEmpEtudById(numEmp, idEtude, year);
        return ResponseEntity.ok(AvoirEmpEtuds);
    }


    @PostMapping("/add")
    public ResponseEntity<AvoirEmpEtud> addAvoirEmpEtuds (@RequestBody AvoirEmpEtud AvoirEmpEtuds) throws ParseException {
        AvoirEmpEtud newAvoirEmpEtuds = this.AvoirEmpEtudService.addAvoirEmpEtud(AvoirEmpEtuds);
        return new ResponseEntity<>(newAvoirEmpEtuds, HttpStatus.CREATED);
    }

    @PutMapping("/update")
    public ResponseEntity<AvoirEmpEtud> updateAvoirEmpEtuds (@RequestBody AvoirEmpEtud AvoirEmpEtuds){
        AvoirEmpEtud updateAvoirEmpEtuds = this.AvoirEmpEtudService.updateAvoirEmpEtud(AvoirEmpEtuds);
        return new ResponseEntity<>(updateAvoirEmpEtuds,HttpStatus.OK);
    }

//    @DeleteMapping("/delete/{id}")
//    public ResponseEntity<?> deleteAvoirEmpEtudsById (@PathVariable("id") Integer id){
//        this.AvoirEmpEtudService.deleteAvoirEmpEtud(id);
//        return new ResponseEntity<>(HttpStatus.OK);
//    }

    @DeleteMapping("/delete/{numEmp}/{idEtude}/{year}")
    public ResponseEntity<?> deleteAvoirEmpEtudsById(@PathVariable("numEmp") Integer numEmp, @PathVariable("idEtude") Integer idEtude, @PathVariable("year") Integer year) {
        this.AvoirEmpEtudService.deleteAvoirEmpEtud(numEmp, idEtude, year);
        return new ResponseEntity<>(HttpStatus.OK);
    }

}
