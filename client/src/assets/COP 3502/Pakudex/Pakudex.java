import java.util.*;

public class Pakudex {

    private int size = 0;
    private int attack;
    private int defense;
    private int speed;
    private Pakuri[] arrayOfPakuri;

    public Pakudex(){

        arrayOfPakuri = new Pakuri[20];
    }

    public Pakudex(int capacity){
        arrayOfPakuri = new Pakuri[capacity];
    }

    public int getSize(){

        return size;
    }

    public int getCapacity() {

        return arrayOfPakuri.length;
    }

    public String[] getSpeciesArray(){
        String[] arrayOfSpecies = new String[size];

        if(size == 0){
            return null;
        }

        for (int i = 0; i < arrayOfSpecies.length; i++){
            String nameOfSpecies = arrayOfPakuri[i].getSpecies();
            arrayOfSpecies[i] = nameOfSpecies;
        }
        return arrayOfSpecies;
    }

    public int[]getStats(String species){
        int[] statsArray = null;

        for (int i = 0; i < size; i++){

            if (arrayOfPakuri[i].getSpecies().equals(species)){

                statsArray = new int[3];

                int secondAttack = arrayOfPakuri[i].getAttack();
                int secondDefense = arrayOfPakuri[i].getDefense();
                int secondSpeed = arrayOfPakuri[i].getSpeed();

                statsArray[0] = secondAttack;
                statsArray[1] = secondDefense;
                statsArray[2] = secondSpeed;

                return statsArray;
            }

        }

        return statsArray;
    }

    public void sortPakuri(){

        for (int i = 0; i < size; i++){

            for (int j = i + 1; j < size; j++){

                if ((arrayOfPakuri[j].getSpecies()).compareTo((arrayOfPakuri[i]).getSpecies()) < 0){

                    Pakuri temp = arrayOfPakuri[i];
                    arrayOfPakuri[i] = arrayOfPakuri[j];
                    arrayOfPakuri[j] = temp;

                }

            }

        }
    }

    public boolean addPakuri(String species){

        if(arrayOfPakuri.length == size){

            return false;
        }

        for (int i = 0; i < size; i++){

            if((arrayOfPakuri[i].getSpecies().equals(species))){

                return false;
            }

        }

        Pakuri newPakuri = new Pakuri(species);
        arrayOfPakuri[size++] = newPakuri;

        return true;
    }

    public boolean evolveSpecies(String species){
        boolean evolveNewSpecies = false;

        for (int i = 0; i < size; i++)

            if (species.equals(arrayOfPakuri[i].getSpecies())){

                arrayOfPakuri[i].evolve();
                evolveNewSpecies = true;
            }

            else {

                evolveNewSpecies = false;

            }

        return evolveNewSpecies;
    }
}
