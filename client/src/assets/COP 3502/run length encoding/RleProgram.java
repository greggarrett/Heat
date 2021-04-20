import java.util.ArrayList;
import java.util.Scanner;
import java.util.Arrays;


public class RleProgram {

    // Method 1
   public static String toHexString(byte[] data){
       String singleDigitHex = "";
       String newHexNumber = "";

        for (int i = 0; i <= data.length - 1; i++){

            singleDigitHex = Integer.toHexString(data[i]);
            newHexNumber = newHexNumber + singleDigitHex;

        }

        return newHexNumber;
    }

    // Method 2
    public static int countRuns(byte[] flatData){
       int countRuns = 1;
       int totalCountRuns = 0;

        for (int i = 0; i < flatData.length - 1; i++) {

            if (flatData[i] != flatData[i + 1]){

                i++;
                countRuns = countRuns + 1;

            }

        }

        totalCountRuns = countRuns;

        return totalCountRuns;
    }

    //Method 3
    public static byte[] encodeRle(byte []flatData){
       int newRleArrayLength = countRuns(flatData);
       byte[] newRleArray = new byte [newRleArrayLength];
       int occasions = 1;
       int j = 0;

       for (int i = 0; i < flatData.length; i++){

           if (occasions <= 14 && i != flatData.length - 1 && flatData[i] == flatData[i + 1]){

               occasions++;

           }

           else {

               newRleArray[j] = (byte) occasions;
               j++;
               newRleArray[j] = flatData[i];
               j++;
               occasions = 1;
           }

       }

       return newRleArray;
    }

   // Method 4
    public static int getDecodedLength(byte[] rleData){
       int decodedLength = 0;

        for (int i = 0; i <= rleData.length - 1; i++) {

          if (i % 2 == 0) {

              decodedLength = decodedLength + rleData[i];

          }
        }

        return decodedLength;
    }

    //Method 5
    public static byte[]decodeRle(byte[] rleData){

        byte[] newArray = new byte [getDecodedLength(rleData)];
        int arrayPoint = 0;

        for (int i = 0; i < rleData.length - 1; i++){

            if (i % 2 == 0) {

                while (rleData[i] > 0){

                    newArray[arrayPoint] = rleData[i + 1];
                    arrayPoint++;
                    rleData[i]--;

                }
            }
        }

        return newArray;
    }


    // Method 6
    public static byte[]stringToData(String dataString){
        byte[] newArray = new byte[dataString.length()];

        for (int i = 0; i < dataString.length(); i++){

            int insideOfArray = Integer.parseInt("" + dataString.charAt(i), 16);
            newArray[i] = (byte) insideOfArray;
        }

        return newArray;
    }

    // Method 7
    public static String toRleString(byte[] rleData){
        String newDataString = "";
        String singleDigitHex = "";

        for (int i = 0; i < rleData.length; i++){

            if (i % 2 != 0){

                singleDigitHex = Integer.toHexString(rleData[i]);
                newDataString = newDataString + singleDigitHex;

            }

            else{
                newDataString = newDataString + rleData[i];
            }

            if (i < rleData.length - 2){
                newDataString = newDataString + ":";
            }

        }

        return newDataString;
    }


    //Method 8
    public static byte[]stringToRle(String rleString){
        byte [] newString = new byte [rleString.length()];
        return newString;
    }

    public static void main(String[] args){
       System.out.println("Welcome to the RLE image encoder!");
       System.out.println("Displaying Spectrum Image:");
       ConsoleGfx.displayImage(ConsoleGfx.testRainbow);

       System.out.println("RLE Menu");
       System.out.println("---------");
       System.out.println("0. Exit");
       System.out.println("1. Load File");
       System.out.println("2. Load Test Image");
       System.out.println("3. Read RLE String");
       System.out.println("4. Read RLE Hex String");
       System.out.println("5. Read Data Hex String");
       System.out.println("6. Display Image");
       System.out.println("7. Display RLE String");
       System.out.println("8. Display Hex RLE Data");
       System.out.println("9. Display Hex Flat Data");

       System.out.println("Select a Menu Option:");

        Scanner myScanner = new Scanner(System.in);
        int userChoice = myScanner.nextInt();
        byte[] dataImage = null;
        String userInput = myScanner.next();
        switch (userChoice){
            case 1:
                System.out.println("Enter name of file to load: ");
                //ConsoleGfx.loadFile();
                break;

            case 2:
                System.out.println(ConsoleGfx.testImage);
                System.out.println("Test image data loaded.");
                break;

            case 3:
                System.out.println("Enter an RLE string to be decoded:");
                decodeRle(stringToRle(userInput));
                break;

            case 4:
                System.out.println("Enter the hex string holding RLE data:");
                decodeRle(stringToData(userInput));
                break;

            case 5:
                System.out.println("Enter the hex string holding flat data:");
                stringToData(userInput);
                break;

            case 6:
                if (dataImage == null){
                    System.out.println("No data.");
                }

                else{
                    System.out.println("Displaying image...");
                    ConsoleGfx.displayImage(dataImage);
                }
                break;

            case 7:
                System.out.println("RLE representation: ");
                toRleString(encodeRle(dataImage));
                break;

            case 8:
                System.out.println("RLE hex values: ");
                toHexString(encodeRle(dataImage));
                break;

            case 9:

                System.out.println("Flat hex values: ");
                toHexString(dataImage);
                break;

            default:
                System.exit(0);
        }

    }
}
