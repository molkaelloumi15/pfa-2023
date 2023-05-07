package ENSIT.GeniInfo1.PFA1.controller;

import ENSIT.GeniInfo1.PFA1.model.Departement;
import ENSIT.GeniInfo1.PFA1.service.DepartementService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/Departement")
public class DepartementCtrl {
    private final DepartementService DepartementService;
    public DepartementCtrl(DepartementService DepartementService){this.DepartementService = DepartementService;}

    @GetMapping("/all")
    public ResponseEntity<List<Departement>> getAllDepartements (){
        List<Departement> Departements= this.DepartementService.findAllDepartement();
        return new ResponseEntity<>(Departements, HttpStatus.OK);
    }

    @GetMapping("/find/{id}")
    public ResponseEntity<Departement> getDepartementsById (@PathVariable("id") Integer id){
        Departement Departements = this.DepartementService.findDepartementById(id);
        return new ResponseEntity<>(Departements,HttpStatus.OK);
    }

    @PostMapping("/add")
    public ResponseEntity<Departement> addDepartements (@RequestBody Departement Departements){
        Departement newDepartements = this.DepartementService.addDepartement(Departements);
        return new ResponseEntity<>(newDepartements, HttpStatus.CREATED);
    }

    @PutMapping("/update")
    public ResponseEntity<Departement> updateDepartements (@RequestBody Departement Departements){
        Departement updateDepartements = this.DepartementService.updateDepartement(Departements);
        return new ResponseEntity<>(updateDepartements,HttpStatus.OK);
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<?> deleteDepartementsById (@PathVariable("id") Integer id){
        this.DepartementService.deleteDepartement(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }

}
