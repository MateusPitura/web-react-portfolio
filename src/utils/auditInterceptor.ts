import FingerprintJS from "@fingerprintjs/fingerprintjs";
import { initializeApp } from "firebase/app";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { nanoid } from "nanoid";

interface Navigator {
  deviceMemory?: number;
  connection?: {
    effectiveType?: string;
    downlink?: number;
    rtt?: number;
    saveData?: boolean;
    type?: string;
    downlinkMax?: number;
  };
}

export async function auditInterceptor(): Promise<void> {
  if (localStorage.getItem("DISABLE_AUDIT_PORTFOLIO") === "true") {
    return;
  }

  const app = initializeApp({ projectId: "telemetry-c5275" });
  const db = getFirestore(app);

  const clientId = localStorage.getItem("CLIENT_ID_PORTOFLIO");
  if (!clientId) {
    localStorage.setItem("CLIENT_ID_PORTOFLIO", nanoid());
  }

  const connection = (navigator as Navigator)?.connection;

  const fp = await FingerprintJS.load();
  const fingerprint = await fp.get();

  const audit = {
    userAgent: navigator?.userAgent ?? null,
    referrer: document?.referrer ?? null,
    url: location?.href ?? null,
    timestamp: new Date()?.toISOString() ?? null,
    stage: import.meta.env.MODE ?? null,
    timezone: Intl?.DateTimeFormat()?.resolvedOptions()?.timeZone,
    viewport: {
      width: window?.innerWidth ?? null,
      height: window?.innerHeight ?? null,
    },
    connection: {
      effectiveType: connection?.effectiveType ?? null,
      downlink: connection?.downlink ?? null,
      rtt: connection?.rtt ?? null,
      saveData: connection?.saveData ?? null,
      type: connection?.type ?? null,
      downlinkMax: connection?.downlinkMax ?? null,
    },
    memory: (navigator as Navigator)?.deviceMemory ?? null,
    language: navigator?.language,
    cookieEnabled: navigator?.cookieEnabled,
    fingerprint: fingerprint.visitorId,
    clientId,
  };

  try {
    void addDoc(collection(db, "portfolio"), audit);
  } catch (error) {
    console.error("Cannot save audit", error);
  }
}
