package ENSIT.GeniInfo1.PFA1.service;

import ENSIT.GeniInfo1.PFA1.Exception.UserNotFoundException;
import ENSIT.GeniInfo1.PFA1.model.Departement;
import ENSIT.GeniInfo1.PFA1.repository.DepartementRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class DepartementService {

    private final DepartementRepo departementRepo;

    @Autowired

    public DepartementService(DepartementRepo departementRepo) {this.departementRepo = departementRepo;}

    public Departement addDepartement(Departement departement) {return this.departementRepo.save(departement);}

    public Departement findDepartementById (Integer id) { return this.departementRepo.findById(id).orElseThrow(() -> new UserNotFoundException("Departement with the id = " + id + " was not found"));}

    public List<Departement> findAllDepartement() {return this.departementRepo.findAll();}

    public Departement updateDepartement(Departement departement) {return departementRepo.save(departement);}

    public void deleteDepartement(Integer id) {this.departementRepo.deleteById(id);}

}
