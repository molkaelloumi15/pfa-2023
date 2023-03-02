package ENSIT.GeniInfo1.PFA1.controller;

import ENSIT.GeniInfo1.PFA1.service.BureauService;
import ENSIT.GeniInfo1.PFA1.model.Bureau;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/Bureaux")
public class BureauCtrl {
    private final BureauService BureauService;
    public BureauCtrl(BureauService BureauService){this.BureauService = BureauService;}

    @GetMapping("/all")
    public ResponseEntity<List<Bureau>> getAllBureaus (){
        List<Bureau> Bureaus= this.BureauService.findAllBureau();
        return new ResponseEntity<>(Bureaus, HttpStatus.OK);
    }

    @GetMapping("/find/{id}")
    public ResponseEntity<Bureau> getBureausById (@PathVariable("id") Integer id){
        Bureau Bureaus = this.BureauService.findBureauById(id);
        return new ResponseEntity<>(Bureaus,HttpStatus.OK);
    }

    @PostMapping("/add")
    public ResponseEntity<Bureau> addBureaus (@RequestBody Bureau Bureaus){
        Bureau newBureaus = this.BureauService.addBureau(Bureaus);
        return new ResponseEntity<>(newBureaus, HttpStatus.CREATED);
    }

    @PutMapping("/update")
    public ResponseEntity<Bureau> updateBureaus (@RequestBody Bureau Bureaus){
        Bureau updateBureaus = this.BureauService.updateBureau(Bureaus);
        return new ResponseEntity<>(updateBureaus,HttpStatus.OK);
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<?> deleteBureausById (@PathVariable("id") Integer id){
        this.BureauService.deleteBureau(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }

}
