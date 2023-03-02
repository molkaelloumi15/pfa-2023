package ENSIT.GeniInfo1.PFA1.service;

import ENSIT.GeniInfo1.PFA1.Exception.UserNotFoundException;
import ENSIT.GeniInfo1.PFA1.model.AvoirEmpEtud;
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

    public AvoirEmpEtud findAvoirEmpEtudById (Integer id) { return this.AvoirEmpEtudRepo.findById(id).orElseThrow(() -> new UserNotFoundException("AvoirEmpEtud with the id = " + id + " was not found"));}

    public List<AvoirEmpEtud> findAllAvoirEmpEtud() {return this.AvoirEmpEtudRepo.findAll();}

    public AvoirEmpEtud updateAvoirEmpEtud(AvoirEmpEtud AvoirEmpEtud) {return AvoirEmpEtudRepo.save(AvoirEmpEtud);}

    public void deleteAvoirEmpEtud(Integer id) {this.AvoirEmpEtudRepo.deleteById(id);}

}
