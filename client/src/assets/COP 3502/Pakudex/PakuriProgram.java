import java.awt.*;
import java.util. *;

public class PakuriProgram {

    public static void main (String[] args){
        System.out.println("Welcome to Pakudex: Tracker Extraordinaire!");

        boolean isInt = false;
        int maxCapacity = 0;
        Scanner myScanner = new Scanner(System.in);

        while(isInt == false){

            try{

                System.out.println("Enter max capacity of the Pakudex: ");
                maxCapacity = Integer.parseInt(myScanner.next());

                if(maxCapacity <= 0){

                    System.out.println("Please enter a valid size. ");
                    isInt = false;

                }

                else{

                    isInt = true;

                }
            }

            catch (Exception e){
                System.out.println("Please enter a valid size. ");
                maxCapacity = 0;

            }

        }

        Pakudex pakudexObject = new Pakudex(maxCapacity);

        System.out.println("The Pakudex can hold "+ pakudexObject.getCapacity() + " species of Pakuri.");
        int usersSelection = 0;
        System.out.println();

        while (usersSelection != 6) {

            System.out.println("Pakudex Main Menu");
            System.out.println("----------------");
            System.out.println("1. List Pakuri");
            System.out.println("2. Show Pakuri");
            System.out.println("3. Add Pakuri");
            System.out.println("4. Evolve Pakuri");
            System.out.println("5. Sort Pakuri");
            System.out.println("6. Exit");
            System.out.println();
            System.out.println("What would you like to do?");
            System.out.println();

            usersSelection = 0;
            try{

                usersSelection = Integer.parseInt(myScanner.next());

            }

            catch (Exception e){

                usersSelection = 0;

            }

            switch (usersSelection)
            {
                case 1:

                    if (pakudexObject.getSize() != 0)
                    {

                        System.out.println("Pakuri In Pakudex: ");

                        for (int i = 0; i < pakudexObject.getSize(); i++)
                        {

                            System.out.println((i + 1) + "." + pakudexObject.getSpeciesArray()[i]);

                        }
                    }
                    else {

                        System.out.println("No Pakuri in Pakudex yet!");

                    }

                    break;

                case 2:
                    System.out.println("Enter the name of the species to display: ");
                    String nameOfPakuri = myScanner.next();

                    if (pakudexObject.getSize() != 0) {

                        int[] newArray = pakudexObject.getStats(nameOfPakuri);

                        if (newArray == null) {
                            System.out.println("Error: No such Pakuri!");
                        }

                        else if (newArray != null){
                            System.out.println("Species: " + nameOfPakuri);
                            System.out.println("Attack: " + newArray[0]);
                            System.out.println("Defense: " + newArray[1]);
                            System.out.println("Speed: " + newArray[2]);
                        }
                    }

                    else{

                        System.out.println("Error: No such Pakuri! ");
                    }

                    break;

                case 3:

                    System.out.println("Enter the name of the species to add: ");
                    nameOfPakuri = myScanner.next();

                    if (pakudexObject.addPakuri(nameOfPakuri)) {
                        System.out.println("Pakuri species " + nameOfPakuri + " successfully added!");
                    }

                    else{

                        String[] speciesNameArray = pakudexObject.getSpeciesArray();
                        boolean found = false;

                        //for (int i = 0; i < speciesNameArray.length.; i++) {

                        for (int i = 0; i < pakudexObject.getSize(); i++) {

                            if (speciesNameArray[i].equals(nameOfPakuri)) {

                                found = true;

                            }

                        }

                        if (found){
                            System.out.println("Error: Pakudex already contains this species!");

                        }

                        else{
                            System.out.println("Error: Pakudex is full!");

                        }

                    }

                    break;

                case 4:

                    System.out.println("Enter name of the species to evolve: ");
                    String nameOfEvolvedSpecies = myScanner.next();

                    if (pakudexObject.evolveSpecies(nameOfEvolvedSpecies) == true)
                    {

                        System.out.println(nameOfEvolvedSpecies + " has evolved!");

                    } else if (pakudexObject.evolveSpecies(nameOfEvolvedSpecies) == false)
                    {

                        System.out.println("Error: No such Pakuri!");

                    }


                    break;

                case 5:

                    pakudexObject.sortPakuri();
                    System.out.println("Pakuri have been sorted!");

                    break;

                case 6:

                    System.out.println();
                    System.out.println("Thanks for using Pakudex! Bye!");
                    System.exit(0);

                    break;

                default:

                    System.out.println("Unrecognized menu selection!");
                    break;
            }

        }
    }
}
