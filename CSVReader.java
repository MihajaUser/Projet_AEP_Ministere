import java.io.BufferedReader;
import java.io.FileReader;
import java.io.IOException;

public class CSVReader {

  public static void main(String[] args) throws Exception {
    String csvFile = "pointmadagacar.csv";
    String line = "";
    String cvsSplitBy = ";";
    
      try (BufferedReader br = new BufferedReader(new FileReader(csvFile))) {

        while ((line = br.readLine()) != null) {

          // use semicolon as separator
          String[] elements = line.split(cvsSplitBy);

          // print elements
          for (String element : elements) {
            System.out.print(element + " ");
          }
          System.out.println();
        }

      } catch (IOException e) {
        e.printStackTrace();
      }

  }
}
