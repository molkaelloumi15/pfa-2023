package ENSIT.GeniInfo1.PFA1.service;

import ENSIT.GeniInfo1.PFA1.Exception.UserNotFoundException;
import ENSIT.GeniInfo1.PFA1.model.Employe;
import ENSIT.GeniInfo1.PFA1.repository.EmployeRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class EmployeService {

    private final EmployeRepo EmployeRepo;

    @Autowired

    public EmployeService(EmployeRepo EmployeRepo) {this.EmployeRepo = EmployeRepo;}

    public Employe addEmploye(Employe Employe) {return this.EmployeRepo.save(Employe);}

    public Employe findEmployeById (Integer id) { return this.EmployeRepo.findById(id).orElseThrow(() -> new UserNotFoundException("Employe with the id = " + id + " was not found"));}

    public List<Employe> findAllEmploye() {return this.EmployeRepo.findAll();}

    public Employe updateEmploye(Employe Employe) {return EmployeRepo.save(Employe);}

    public void deleteEmploye(Integer id) {this.EmployeRepo.deleteById(id);}

}
