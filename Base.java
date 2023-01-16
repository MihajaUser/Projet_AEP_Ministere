import java.io.BufferedReader;
import java.io.FileReader;
import java.io.IOException;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.SQLException;

public class CSVImporter {

  public static void main(String[] args) {
    String csvFile = "path/to/file.csv";
    String line = "";
    String cvsSplitBy = ";";
    Connection conn = null;
    PreparedStatement stmt = null;

    try {
      // Connect to the database
      conn =
        DriverManager.getConnection(
          "jdbc:postgresql://host:port/database",
          "username",
          "password"
        );

      // Prepare the SQL statement
      String sql =
        "INSERT INTO tablename (column1, column2, column3) VALUES (?, ?, ?)";
      stmt = conn.prepareStatement(sql);

      // Open the CSV file
      BufferedReader br = new BufferedReader(new FileReader(csvFile));

      // Read each line of the CSV file
      while ((line = br.readLine()) != null) {
        // Use semicolon as separator
        String[] elements = line.split(cvsSplitBy);

        // Set the values for each column
        stmt.setString(1, elements[0]);
        stmt.setString(2, elements[1]);
        stmt.setString(3, elements[2]);

        // Insert the data into the database
        stmt.executeUpdate();
      }

      // Close the CSV file
      br.close();
    } catch (IOException | SQLException e) {
      e.printStackTrace();
    } finally {
      // Close the connection and statement
      try {
        if (stmt != null) {
          stmt.close();
        }
        if (conn != null) {
          conn.close();
        }
      } catch (SQLException e) {
        e.printStackTrace();
      }
    }
  }
}
