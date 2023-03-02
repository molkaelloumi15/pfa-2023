package ENSIT.GeniInfo1.PFA1.service;

import ENSIT.GeniInfo1.PFA1.Exception.UserNotFoundException;
import ENSIT.GeniInfo1.PFA1.model.ProjetRecherche;
import ENSIT.GeniInfo1.PFA1.repository.ProjetRechercheRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProjetRechercheService {

    private final ProjetRechercheRepo ProjetRechercheRepo;

    @Autowired

    public ProjetRechercheService(ProjetRechercheRepo ProjetRechercheRepo) {this.ProjetRechercheRepo = ProjetRechercheRepo;}

    public ProjetRecherche addProjetRecherche(ProjetRecherche ProjetRecherche) {return this.ProjetRechercheRepo.save(ProjetRecherche);}

    public ProjetRecherche findProjetRechercheById (Integer id) { return this.ProjetRechercheRepo.findById(id).orElseThrow(() -> new UserNotFoundException("ProjetRecherche with the id = " + id + " was not found"));}

    public List<ProjetRecherche> findAllProjetRecherche() {return this.ProjetRechercheRepo.findAll();}

    public ProjetRecherche updateProjetRecherche(ProjetRecherche ProjetRecherche) {return ProjetRechercheRepo.save(ProjetRecherche);}

    public void deleteProjetRecherche(Integer id) {this.ProjetRechercheRepo.deleteById(id);}

}
