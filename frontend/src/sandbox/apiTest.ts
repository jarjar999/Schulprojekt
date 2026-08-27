import axios from 'axios';

// 1. Typ-Interface für die Schülerdaten definieren (Typsicherheit!)
interface Student {
  id: number;
  name: string;
  klasse: string;
}

/**
 * Eine eigenständige Funktion, die die Schülerliste von der API abruft
 * und das Ergebnis formatiert in der Konsole ausgibt.
 */
export const runAxiosTest = async (): Promise<void> => {
  const url = 'http://localhost:5000/api/students';
  
  console.log(`📡 Starte API-Abfrage via Axios an: ${url}...`);

  try {
    // Axios-GET-Request mit Übergabe des erwarteten Datentyps
    const response = await axios.get<Student[]>(url);
    
    console.log('✅ API-Aufruf erfolgreich! Status:', response.status);
    console.log('📦 Erhaltene Daten:');
    
    // Daten elegant als Tabelle in der Browser-Konsole ausgeben
    console.table(response.data);

  } catch (error) {
    console.error('❌ Fehler beim Axios-Testaufruf:');
    if (axios.isAxiosError(error)) {
      console.error(`Status-Code: ${error.response?.status}`);
      console.error(`Nachricht: ${error.message}`);
    } else {
      console.error('Unerwarteter Fehler:', error);
    }
  }
};