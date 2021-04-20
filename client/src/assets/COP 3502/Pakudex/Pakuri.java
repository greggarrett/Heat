import java.util.*;

public class Pakuri{

    private String species;
    private int attack;
    private int defense;
    private int speed;

    public Pakuri(String species){
        attack = (species.length() * 7) + 9;
        defense = (species.length() * 5) + 17;
        speed = (species.length() * 6) + 13;

        this.species = species;

    }

    public String getSpecies(){

        return this.species;
    }

    public int getAttack(){

        return this.attack;
    }

    public int getDefense(){

        return this.defense;
    }

    public int getSpeed(){

        return this.speed;
    }

    public void setAttack(int newAttack){

        attack = newAttack;

    }

    public void evolve(){

        attack = attack * 2;
        defense = defense * 4;
        speed = speed *3;
    }

}
