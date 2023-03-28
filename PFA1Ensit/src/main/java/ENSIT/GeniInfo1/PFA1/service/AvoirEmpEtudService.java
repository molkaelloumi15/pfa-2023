package ENSIT.GeniInfo1.PFA1.service;

import ENSIT.GeniInfo1.PFA1.Exception.UserNotFoundException;
import ENSIT.GeniInfo1.PFA1.model.AvoirEmpEtud;
import ENSIT.GeniInfo1.PFA1.model.AvoirEmpEtudPk;
import ENSIT.GeniInfo1.PFA1.model.Employe;
import ENSIT.GeniInfo1.PFA1.model.Etude;
import ENSIT.GeniInfo1.PFA1.repository.AvoirEmpEtudRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AvoirEmpEtudService {

    private final AvoirEmpEtudRepo AvoirEmpEtudRepo;

    @Autowired

    public AvoirEmpEtudService(AvoirEmpEtudRepo AvoirEmpEtudRepo) {this.AvoirEmpEtudRepo = AvoirEmpEtudRepo;}

    public AvoirEmpEtud addAvoirEmpEtud(AvoirEmpEtud AvoirEmpEtud) {return this.AvoirEmpEtudRepo.save(AvoirEmpEtud);}

    public AvoirEmpEtud findAvoirEmpEtudById(Integer employe, Integer etude) {
        AvoirEmpEtudPk avoirEmpEtudPk = new AvoirEmpEtudPk(employe, etude);
        return this.AvoirEmpEtudRepo.findById(avoirEmpEtudPk).orElseThrow(() -> new UserNotFoundException("AvoirEmpEtud with employe = " + employe + " and etude = " + etude + " was not found"));
    }
    public List<AvoirEmpEtud> findAllAvoirEmpEtud() {return this.AvoirEmpEtudRepo.findAll();}

    public AvoirEmpEtud updateAvoirEmpEtud(AvoirEmpEtud AvoirEmpEtud) {return AvoirEmpEtudRepo.save(AvoirEmpEtud);}

    public void deleteAvoirEmpEtud(AvoirEmpEtud AvoirEmpEtud) {
        this.AvoirEmpEtudRepo.delete(AvoirEmpEtud);
    }

    public void deleteAvoirEmpEtud(Integer numEmp, Integer idEtude) {
        AvoirEmpEtudPk pk = new AvoirEmpEtudPk(numEmp, idEtude);
        this.AvoirEmpEtudRepo.deleteById(pk);
    }

}
