package ENSIT.GeniInfo1.PFA1.controller;

import ENSIT.GeniInfo1.PFA1.model.Employe;
import ENSIT.GeniInfo1.PFA1.service.EmployeService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/Employe")
public class EmployeCtrl {
    private final EmployeService EmployeService;
    public EmployeCtrl(EmployeService EmployeService){this.EmployeService = EmployeService;}

    @GetMapping("/all")
    public ResponseEntity<List<Employe>> getAllEmployes (){
        List<Employe> Employes= this.EmployeService.findAllEmploye();
        return new ResponseEntity<>(Employes, HttpStatus.OK);
    }

    @GetMapping("/find/{id}")
    public ResponseEntity<Employe> getEmployesById (@PathVariable("id") Integer id){
        Employe Employes = this.EmployeService.findEmployeById(id);
        return new ResponseEntity<>(Employes,HttpStatus.OK);
    }

    @PostMapping("/add")
    public ResponseEntity<Employe> addEmployes (@RequestBody Employe Employes){
        Employe newEmployes = this.EmployeService.addEmploye(Employes);
        return new ResponseEntity<>(newEmployes, HttpStatus.CREATED);
    }

    @PutMapping("/update")
    public ResponseEntity<Employe> updateEmployes (@RequestBody Employe Employes){
        Employe updateEmployes = this.EmployeService.updateEmploye(Employes);
        return new ResponseEntity<>(updateEmployes,HttpStatus.OK);
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<?> deleteEmployesById (@PathVariable("id") Integer id){
        this.EmployeService.deleteEmploye(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }

}
