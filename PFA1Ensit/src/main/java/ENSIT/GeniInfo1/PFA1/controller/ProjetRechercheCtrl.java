package ENSIT.GeniInfo1.PFA1.controller;

import ENSIT.GeniInfo1.PFA1.model.ProjetRecherche;
import ENSIT.GeniInfo1.PFA1.service.ProjetRechercheService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/ProjetRecherche")
public class ProjetRechercheCtrl {
    private final ProjetRechercheService ProjetRechercheService;
    public ProjetRechercheCtrl(ProjetRechercheService ProjetRechercheService){this.ProjetRechercheService = ProjetRechercheService;}

    @GetMapping("/all")
    public ResponseEntity<List<ProjetRecherche>> getAllProjetRecherches (){
        List<ProjetRecherche> ProjetRecherches= this.ProjetRechercheService.findAllProjetRecherche();
        return new ResponseEntity<>(ProjetRecherches, HttpStatus.OK);
    }

    @GetMapping("/find/{id}")
    public ResponseEntity<ProjetRecherche> getProjetRecherchesById (@PathVariable("id") Integer id){
        ProjetRecherche ProjetRecherches = this.ProjetRechercheService.findProjetRechercheById(id);
        return new ResponseEntity<>(ProjetRecherches,HttpStatus.OK);
    }

    @PostMapping("/add")
    public ResponseEntity<ProjetRecherche> addProjetRecherches (@RequestBody ProjetRecherche ProjetRecherches){
        ProjetRecherche newProjetRecherches = this.ProjetRechercheService.addProjetRecherche(ProjetRecherches);
        return new ResponseEntity<>(newProjetRecherches, HttpStatus.CREATED);
    }

    @PutMapping("/update")
    public ResponseEntity<ProjetRecherche> updateProjetRecherches (@RequestBody ProjetRecherche ProjetRecherches){
        ProjetRecherche updateProjetRecherches = this.ProjetRechercheService.updateProjetRecherche(ProjetRecherches);
        return new ResponseEntity<>(updateProjetRecherches,HttpStatus.OK);
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<?> deleteProjetRecherchesById (@PathVariable("id") Integer id){
        this.ProjetRechercheService.deleteProjetRecherche(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }

}
