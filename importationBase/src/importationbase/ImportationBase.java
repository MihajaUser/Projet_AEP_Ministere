package importationbase;

import java.io.BufferedReader;
import java.io.FileReader;
import java.io.IOException;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;

/**
 *
 * @author mihaja
 */
public class ImportationBase {

    /**
     * @param args the command line arguments
     */
    public static void main(String[] args) {
        String csvFile = "D:/stage/Projet_AEP_Ministere/importationBase/src/importationbase/pointmadagacar.csv";
        String line = "";
        String cvsSplitBy = ";";
        Connection conn = null;
        Statement stmt = null;

        try {
            // Connect to the database
            conn
                    = DriverManager.getConnection(
                            "jdbc:postgresql://localhost:5432/projetMinistereAvecCsv",
                            "postgres",
                            "root"
                    );
            // Prepare the SQL statement
            String sql;

            // Open the CSV file
            BufferedReader br = new BufferedReader(new FileReader(csvFile));
            // Read each line of the CSV file
            int i = 0;
            while ((line = br.readLine()) != null && i < 1) {
                String[] elements = line.split(cvsSplitBy);
                //  System.out.println(elements[0] + " " + elements[9]);
                sql
                        = "INSERT INTO public.\"Projets\"(\n"
                        + "	id_utilisateur, region, district, commune, fokontany, localite, latitude, longitude, nb_beneficiaire, point_eau, infra_eau, etat_ouvrage,utilisation)\n"
                        + "	VALUES (  " + elements[1] + ", '" + elements[2] + "', '" + elements[3] + "', '" + elements[4] + "', '" + elements[5] + "','" + elements[6] + "',"
                        + elements[7] + ", " + elements[8] + ", '" + elements[9] + "', '" + elements[10] + "', '" + elements[11] + "', '" + elements[12] + "','" + "Une utilisation" + "');";
                // Use semicolon as separator
                System.out.println(sql);
                stmt = conn.createStatement();
                stmt.executeUpdate(sql);
                i++;
            }
//            System.out.println("success mihaja");
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
