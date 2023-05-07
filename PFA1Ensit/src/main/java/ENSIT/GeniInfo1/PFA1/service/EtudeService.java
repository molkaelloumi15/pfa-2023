package ENSIT.GeniInfo1.PFA1.service;

import ENSIT.GeniInfo1.PFA1.Exception.UserNotFoundException;
import ENSIT.GeniInfo1.PFA1.model.Etude;
import ENSIT.GeniInfo1.PFA1.repository.EtudeRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class EtudeService {

    private final EtudeRepo EtudeRepo;

    @Autowired

    public EtudeService(EtudeRepo EtudeRepo) {this.EtudeRepo = EtudeRepo;}

    public Etude addEtude(Etude Etude) {return this.EtudeRepo.save(Etude);}

    public Etude findEtudeById (Integer id) { return this.EtudeRepo.findById(id).orElseThrow(() -> new UserNotFoundException("Etude with the id = " + id + " was not found"));}

    public List<Etude> findAllEtude() {return this.EtudeRepo.findAll();}

    public Etude updateEtude(Etude Etude) {return EtudeRepo.save(Etude);}

    public void deleteEtude(Integer id) {this.EtudeRepo.deleteById(id);}

}
