package ENSIT.GeniInfo1.PFA1.service;

import ENSIT.GeniInfo1.PFA1.Exception.UserNotFoundException;
import ENSIT.GeniInfo1.PFA1.model.AvoirEmpEtud;
import ENSIT.GeniInfo1.PFA1.model.AvoirEmpEtudPk;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import ENSIT.GeniInfo1.PFA1.repository.AvoirEmpEtudRepo;

import java.util.List;
import java.util.Date;

@Service
public class AvoirEmpEtudService {

    private final AvoirEmpEtudRepo AvoirEmpEtudRepo;

    @Autowired
    public AvoirEmpEtudService(AvoirEmpEtudRepo AvoirEmpEtudRepo) {
        this.AvoirEmpEtudRepo = AvoirEmpEtudRepo;
    }

    public AvoirEmpEtud addAvoirEmpEtud(AvoirEmpEtud AvoirEmpEtud) {
        return this.AvoirEmpEtudRepo.save(AvoirEmpEtud);
    }

    public AvoirEmpEtud findAvoirEmpEtudById(Integer employe, Integer etude, Integer date) {
        AvoirEmpEtudPk avoirEmpEtudPk = new AvoirEmpEtudPk(employe, etude, date);
        return this.AvoirEmpEtudRepo.findById(avoirEmpEtudPk).orElseThrow(() -> new UserNotFoundException("AvoirEmpEtud with employe = " + employe + ", etude = " + etude + ", and date = " + date + " was not found"));
    }

    public List<AvoirEmpEtud> findAllAvoirEmpEtud() {
        return this.AvoirEmpEtudRepo.findAll();
    }

    public List<Object[]> findAllAvoirEmpByEtud() {
        return this.AvoirEmpEtudRepo.countEmployeByEtude();
    }

    public AvoirEmpEtud updateAvoirEmpEtud(AvoirEmpEtud AvoirEmpEtud) {
        return AvoirEmpEtudRepo.save(AvoirEmpEtud);
    }

    public void deleteAvoirEmpEtud(AvoirEmpEtud AvoirEmpEtud) {
        this.AvoirEmpEtudRepo.delete(AvoirEmpEtud);
    }

    public void deleteAvoirEmpEtud(Integer employe, Integer etude, Integer date) {
        AvoirEmpEtudPk pk = new AvoirEmpEtudPk(employe, etude, date);
        this.AvoirEmpEtudRepo.deleteById(pk);
    }

    public List<AvoirEmpEtud> findAllByEmp(int employe) {
        return this.AvoirEmpEtudRepo.findAllByEmploye_NumEmp(employe);
    }

    public List<AvoirEmpEtud> findAllByEtud(int etude) {
        return this.AvoirEmpEtudRepo.findAllByEtude_IdEtude(etude);
    }
}
