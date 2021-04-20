import java.util.Random;
import java.util.Scanner;

public class Blackjack {
    public static void main(String[] args) {
        int gamenum = 1;
        P1Random rng = new P1Random();
        int cardnum = 0;
        int handnum = 0;
        int playerwin = 0;
        int dealerwin = 0;
        int numofties = 0;
        double percentage = 0;
        int dealershand = 0;
        Scanner myScanner = new Scanner(System.in);
        int selection = 1;
        System.out.println("START GAME #" + gamenum);
        System.out.println();
        while (selection != 4) {
            cardnum = rng.nextInt(13) + 1;
            switch (cardnum) {
                case 1:
                    System.out.println("Your card is a ACE!");
                    handnum += 1;
                    break;
                case 2:
                    System.out.println("Your card is a 2!");
                    handnum += 2;
                    break;
                case 3:
                    System.out.println("Your card is a 3!");
                    handnum += 3;
                    break;
                case 4:
                    System.out.println("Your card is a 4!");
                    handnum += 4;
                    break;
                case 5:
                    System.out.println("Your card is a 5!");
                    handnum += 5;
                    break;
                case 6:
                    System.out.println("Your card is a 6!");
                    handnum += 6;
                    break;
                case 7:
                    System.out.println("Your card is a 7!");
                    handnum += 7;
                    break;
                case 8:
                    System.out.println("Your card is a 8!");
                    handnum += 8;
                    break;
                case 9:
                    System.out.println("Your card is a 9!");
                    handnum += 9;
                    break;
                case 10:
                    System.out.println("Your card is a 10!");
                    handnum += 10;
                    break;
                case 11:
                    System.out.println("Your card is a JACK!");
                    handnum += 10;
                    break;
                case 12:
                    System.out.println("Your card is a QUEEN!");
                    handnum += 10;
                    break;
                case 13:
                    System.out.println("You card is a KING!");
                    handnum += 10;
                    break;
            }
            System.out.println("Your hand is: " + handnum);
            System.out.println();
            if (handnum == 21) {
                System.out.println("BLACKJACK! You win!");
                System.out.println();
                playerwin++;
                gamenum++;
                System.out.println("START GAME #" + gamenum);
                System.out.println();
                handnum = 0;
                continue;
            } else if (handnum > 21) {
                System.out.println("You exceeded 21! You lose.");
                System.out.println();
                dealerwin++;
                gamenum++;
                System.out.println("START GAME #" + gamenum);
                System.out.println();
                handnum = 0;
                continue;
            }
            if (selection >= 1 && selection <= 4) {
                System.out.println("1. Get another card");
                System.out.println("2. Hold hand");
                System.out.println("3. Print statistics");
                System.out.println("4. Exit");
                System.out.println();
                System.out.print("Choose an option: ");
            }
            selection = myScanner.nextInt();
            System.out.println();
            while(selection > 4 || selection < 1){
                System.out.println("Invalid input!");
                System.out.println("Please enter an integer value between 1 and 4.");
                System.out.println();
                System.out.println("1. Get another card");
                System.out.println("2. Hold hand");
                System.out.println("3. Print statistics");
                System.out.println("4. Exit");
                System.out.println();
                System.out.print("Choose an option: ");
                selection = myScanner.nextInt();
                System.out.println();
            }
            while(selection == 3){
                System.out.println("Number of Player wins: " + playerwin);
                System.out.println("Number of Dealer wins: " + dealerwin);
                System.out.println("Number of tie games: " + numofties);
                System.out.println("Total # of games played is: " + (gamenum - 1));
                System.out.println("Percentage of Player wins: " + playerwin*100.0/(gamenum-1) + "%");
                System.out.println();
                System.out.println("1. Get another card");
                System.out.println("2. Hold hand");
                System.out.println("3. Print statistics");
                System.out.println("4. Exit");
                System.out.println();
                System.out.print("Choose an option: ");
                selection = myScanner.nextInt();
                System.out.println();
            }
            switch (selection) {
                case 1:
                    break;
                case 2:
                    dealershand = rng.nextInt(11) + 16;
                    System.out.println("Dealer's hand: " + dealershand);
                    System.out.println("Your hand is: " + handnum);
                    System.out.println();
                    if (dealershand > 21 || handnum > dealershand) {
                        System.out.println("You win!");
                        System.out.println();
                        playerwin++;
                        gamenum++;
                    } else if (dealershand > handnum) {
                        System.out.println("Dealer wins!");
                        System.out.println();
                        dealerwin++;
                        gamenum++;
                    } else if (dealershand == handnum) {
                        System.out.println("It's a tie! No one wins!");
                        System.out.println();
                        numofties++;
                        gamenum++;
                    }
                    System.out.println("START GAME #" + gamenum);
                    System.out.println();
                    handnum = 0;
                    break;
                case 4:
                    System.exit(0);
                    break;
            }
        }
    }
}