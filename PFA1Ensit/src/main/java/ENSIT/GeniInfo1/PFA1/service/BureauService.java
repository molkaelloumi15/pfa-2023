package ENSIT.GeniInfo1.PFA1.service;

import ENSIT.GeniInfo1.PFA1.Exception.UserNotFoundException;
import ENSIT.GeniInfo1.PFA1.model.Bureau;
import ENSIT.GeniInfo1.PFA1.repository.BureauRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class BureauService {

    private final BureauRepo BureauRepo;

    @Autowired

    public BureauService(BureauRepo BureauRepo) {this.BureauRepo = BureauRepo;}

    public Bureau addBureau(Bureau Bureau) {return this.BureauRepo.save(Bureau);}

    public Bureau findBureauById (Integer id) { return this.BureauRepo.findById(id).orElseThrow(() -> new UserNotFoundException("Bureau with the id = " + id + " was not found"));}

    public List<Bureau> findAllBureau() {return this.BureauRepo.findAll();}

    public Bureau updateBureau(Bureau Bureau) {return BureauRepo.save(Bureau);}

    public void deleteBureau(Integer id) {this.BureauRepo.deleteById(id);}

}
