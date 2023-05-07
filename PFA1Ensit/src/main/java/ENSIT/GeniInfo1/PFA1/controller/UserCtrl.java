package ENSIT.GeniInfo1.PFA1.controller;

import ENSIT.GeniInfo1.PFA1.model.User;
import ENSIT.GeniInfo1.PFA1.service.UserService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/User")
public class UserCtrl {
    private final UserService UserService;
    public UserCtrl(UserService UserService){this.UserService = UserService;}

    @GetMapping("/all")
    public ResponseEntity<List<User>> getAllUsers (){
        List<User> Users= this.UserService.findAllUser();
        return new ResponseEntity<>(Users, HttpStatus.OK);
    }

    @GetMapping("/find/{id}")
    public ResponseEntity<User> getUsersByMail (@PathVariable("id") String id){
        User Users = this.UserService.findUserByMail(id);
        return new ResponseEntity<>(Users,HttpStatus.OK);
    }

    @PostMapping("/add")
    public ResponseEntity<User> addUsers (@RequestBody User Users){
        User newUsers = this.UserService.addUser(Users);
        return new ResponseEntity<>(newUsers, HttpStatus.CREATED);
    }

    @PutMapping("/update")
    public ResponseEntity<User> updateUsers (@RequestBody User Users){
        User updateUsers = this.UserService.updateUser(Users);
        return new ResponseEntity<>(updateUsers,HttpStatus.OK);
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<?> deleteUsersById (@PathVariable("id") String id){
        this.UserService.deleteUser(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }

}
