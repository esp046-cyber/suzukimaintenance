// =============================================================================
// SUZUKI OEM PARTS CATALOG & MAINTENANCE SPECIFICATION DATA
// Target: PWABuilder App / js/data.js
// Scope: 2023–2026 Production Models
// Models: Jimny (3D/5D), Ertiga/Ertiga Hybrid, XL7/XL7 Hybrid, Fronx, Swift,
//         Celerio, S-Presso, Carry, APV, Dzire
// =============================================================================

export const SUZUKI_CATALOG = {
  meta: {
    version: "2026.3.0",
    generatedAt: "2026-11-08T01:45:00Z",
    targetYears: "2023-2026",
    shopBaseUrl: "https://auto.suzuki.com.ph/parts?sku=",
    disclaimers: [
      "I can't check these part numbers against Suzuki's catalogue, so confirm them with a dealer before ordering.",
      "Your file has no prices, so the cost estimate currently shows labour only. It will include parts if you import a catalogue with prices.",
      "Your drivetrain fluids (transmission, transfer case, differentials) have capacities but no service intervals, so I left them out of the schedule. I didn't want to invent intervals. If you give me the intervals, they can become tracked fluid items.",
      "The hybrid battery check I added earlier is gone, since your file doesn't include it. The battery health log is still there.",
      "NHTSA mostly decodes North American VINs, so Philippine-market VINs may not resolve. If that happens, choose the model manually."
    ]
  },

  maintenanceSchedules: {
    standardServiceIntervalKm: 10000,
    standardServiceIntervalMonths: 6,
    heavyDutyServiceIntervalKm: 5000,
    heavyDutyServiceIntervalMonths: 3
  },

  models: {
    // -------------------------------------------------------------------------
    // 1. SUZUKI JIMNY / JIMNY 5-DOOR (JB74W / JC74W)
    // -------------------------------------------------------------------------
    "jimny-2023-2026": {
      modelId: "jimny-2023-2026",
      name: "Suzuki Jimny / Jimny 5-Door",
      platformCode: "JB74W / JC74W",
      years: ["2023", "2024", "2025", "2026"],
      engine: {
        code: "K15B",
        displacement: "1.5L 4-Cylinder DOHC 16V VVT",
        oilCapacityWithFilterLiters: 3.6,
        oilViscosity: "0W-16 / 0W-20 API SN/SP Full Synthetic",
        coolantCapacityLiters: 5.6
      },
      drivetrain: {
        transmissions: ["5-Speed Manual (5MT)", "4-Speed Automatic (4AT)"],
        driveType: "AllGrip Pro Part-Time 4WD with Low Range",
        manualTransFluid: "75W-80 / 75W-90 API GL-4 (1.3 L)",
        autoTransFluid: "Suzuki ATF 3317 / Mobil ATF 3309 (5.7 L dry / 2.5 L drain)",
        transferCaseFluid: "Suzuki Gear Oil 75W-90 (0.9 L)",
        frontDiffFluid: "SAE 75W-85 / 80W-90 API GL-5 Hypoid (1.35 L)",
        rearDiffFluid: "SAE 75W-85 / 80W-90 API GL-5 Hypoid (1.35 L)"
      },
      parts: [
        {
          id: "JMN-ENG-OIL-FLT",
          category: "Filters",
          name: "Engine Oil Filter",
          partNumber: "16510-81420",
          supersedes: "16510-81403",
          price: 0,
          changeIntervalKm: 10000,
          changeIntervalMonths: 6,
          notes: "Spin-on type. Replace drain plug crush washer simultaneously."
        },
        {
          id: "JMN-DRN-WSH",
          category: "Hardware",
          name: "Oil Sump Drain Plug Washer",
          partNumber: "09168-14015",
          supersedes: "09168-14012",
          price: 0,
          changeIntervalKm: 10000,
          changeIntervalMonths: 6,
          notes: "14mm aluminum crush washer (single-use)."
        },
        {
          id: "JMN-AIR-FLT",
          category: "Filters",
          name: "Engine Air Intake Filter Element",
          partNumber: "13780-78R00",
          supersedes: "13780-78R00-000",
          price: 0,
          changeIntervalKm: 30000,
          changeIntervalMonths: 24,
          notes: "Inspect every 10,000 km. Service sooner in dusty/off-road environments."
        },
        {
          id: "JMN-CAB-FLT",
          category: "Filters",
          name: "Cabin AC Pollen Filter",
          partNumber: "95860-74P00",
          supersedes: "95860-78R00",
          price: 0,
          changeIntervalKm: 20000,
          changeIntervalMonths: 12,
          notes: "Located behind glove box."
        },
        {
          id: "JMN-SPK-PLG",
          category: "Ignition",
          name: "Iridium Spark Plugs (Set of 4)",
          partNumber: "09482-00647",
          supersedes: "NGK ILZKR6F11",
          price: 0,
          changeIntervalKm: 60000,
          changeIntervalMonths: 48,
          notes: "1.1 mm pre-gapped iridium tip."
        },
        {
          id: "JMN-BRK-FRT",
          category: "Braking",
          name: "Front Disc Brake Pad Set",
          partNumber: "55810-77R00",
          supersedes: "55810-78R00",
          price: 0,
          changeIntervalKm: 30000,
          changeIntervalMonths: 24,
          notes: "Minimum lining thickness: 1.5 mm."
        },
        {
          id: "JMN-BRK-RR",
          category: "Braking",
          name: "Rear Drum Brake Shoe Set",
          partNumber: "53200-81A11",
          supersedes: "53200-76J01",
          price: 0,
          changeIntervalKm: 60000,
          changeIntervalMonths: 48,
          notes: "Inspect shoes and clean drum dust every 20,000 km."
        },
        {
          id: "JMN-DRV-BLT",
          category: "Belts",
          name: "Alternator & Water Pump Drive Belt",
          partNumber: "17521-77R00",
          supersedes: "4PK815",
          price: 0,
          changeIntervalKm: 60000,
          changeIntervalMonths: 48,
          notes: "V-ribbed serpentine belt."
        }
      ]
    },

    // -------------------------------------------------------------------------
    // 2. SUZUKI ERTIGA / ERTIGA HYBRID (NC11S / ZE81S)
    // -------------------------------------------------------------------------
    "ertiga-2023-2026": {
      modelId: "ertiga-2023-2026",
      name: "Suzuki Ertiga / Smart Hybrid MPV",
      platformCode: "NC11S / ZE81S",
      years: ["2023", "2024", "2025", "2026"],
      engine: {
        code: "K15B / K15C Smart Hybrid (SHVS)",
        displacement: "1.5L 4-Cylinder DOHC DualJet + ISG",
        oilCapacityWithFilterLiters: 3.4,
        oilViscosity: "0W-16 / 0W-20 API SN/SP",
        coolantCapacityLiters: 5.1
      },
      drivetrain: {
        transmissions: ["5-Speed Manual (5MT)", "4-Speed Automatic (4AT)", "6-Speed Automatic (6AT)"],
        driveType: "Front-Wheel Drive (FWD)",
        manualTransFluid: "75W API GL-4 (1.5 L)",
        autoTransFluid: "Suzuki ATF AW-1 / ATF 3317 (5.8 L total fill)"
      },
      parts: [
        {
          id: "ERT-ENG-OIL-FLT",
          category: "Filters",
          name: "Engine Oil Filter",
          partNumber: "16510-81420",
          supersedes: "16510-81403",
          price: 0,
          changeIntervalKm: 10000,
          changeIntervalMonths: 6,
          notes: "Standard spin-on filter cartridge."
        },
        {
          id: "ERT-AIR-FLT",
          category: "Filters",
          name: "Engine Air Cleaner Element",
          partNumber: "13780-73R00",
          supersedes: "13780-73R00-000",
          price: 0,
          changeIntervalKm: 30000,
          changeIntervalMonths: 24,
          notes: "Trapezoidal housing element."
        },
        {
          id: "ERT-CAB-FLT",
          category: "Filters",
          name: "Cabin Pollen / AC Filter",
          partNumber: "95860-74P00",
          supersedes: "95861-68P00",
          price: 0,
          changeIntervalKm: 20000,
          changeIntervalMonths: 12,
          notes: "Standard particulate / anti-allergen filter."
        },
        {
          id: "ERT-SPK-PLG",
          category: "Ignition",
          name: "Laser Iridium Spark Plugs (Set of 4)",
          partNumber: "09482-00647",
          supersedes: "SILZKR6B10E",
          price: 0,
          changeIntervalKm: 60000,
          changeIntervalMonths: 48,
          notes: "Thread: M12 x 1.25, 26.5 mm reach."
        },
        {
          id: "ERT-BRK-FRT",
          category: "Braking",
          name: "Front Disc Brake Pads",
          partNumber: "55810-68P00",
          supersedes: "55810-M68P00",
          price: 0,
          changeIntervalKm: 30000,
          changeIntervalMonths: 24,
          notes: "Bosch/Akebono caliper fitment with acoustic wear indicators."
        },
        {
          id: "ERT-BRK-RR",
          category: "Braking",
          name: "Rear Drum Brake Shoe Assembly",
          partNumber: "53200-68P00",
          supersedes: "53200-72M00",
          price: 0,
          changeIntervalKm: 60000,
          changeIntervalMonths: 48,
          notes: "Rear leading-trailing drum mechanism."
        }
      ]
    },

    // -------------------------------------------------------------------------
    // 3. SUZUKI XL7 / XL7 HYBRID (NC21S / 2023-2026)
    // -------------------------------------------------------------------------
    "xl7-2023-2026": {
      modelId: "xl7-2023-2026",
      name: "Suzuki XL7 / XL7 Smart Hybrid",
      platformCode: "NC21S",
      years: ["2023", "2024", "2025", "2026"],
      engine: {
        code: "K15B / K15C SHVS",
        displacement: "1.5L 4-Cylinder DOHC 16V VVT",
        oilCapacityWithFilterLiters: 3.4,
        oilViscosity: "0W-16 / 0W-20 API SN/SP Full Synthetic",
        coolantCapacityLiters: 5.2
      },
      drivetrain: {
        transmissions: ["4-Speed Automatic (4AT)"],
        driveType: "Front-Wheel Drive (FWD)",
        autoTransFluid: "Suzuki ATF 3317 (5.8 L)"
      },
      parts: [
        {
          id: "XL7-ENG-OIL-FLT",
          category: "Filters",
          name: "Engine Oil Filter",
          partNumber: "16510-81420",
          supersedes: "16510-81403",
          price: 0,
          changeIntervalKm: 10000,
          changeIntervalMonths: 6,
          notes: "Compatible across entire K15 family."
        },
        {
          id: "XL7-AIR-FLT",
          category: "Filters",
          name: "Air Cleaner Element",
          partNumber: "13780-73R00",
          supersedes: "13780-73R00-000",
          price: 0,
          changeIntervalKm: 30000,
          changeIntervalMonths: 24,
          notes: "High airflow paper element."
        },
        {
          id: "XL7-CAB-FLT",
          category: "Filters",
          name: "Cabin AC Pollen Filter",
          partNumber: "95860-74P00",
          supersedes: "95861-68P00",
          price: 0,
          changeIntervalKm: 20000,
          changeIntervalMonths: 12,
          notes: "PM2.5 particulate filtration."
        },
        {
          id: "XL7-BRK-FRT",
          category: "Braking",
          name: "Front Disc Brake Pads",
          partNumber: "55810-68P00",
          supersedes: "55810-M68P00",
          price: 0,
          changeIntervalKm: 30000,
          changeIntervalMonths: 24,
          notes: "Cross-compatible with Ertiga NC11S."
        },
        {
          id: "XL7-BRK-RR",
          category: "Braking",
          name: "Rear Drum Brake Shoes",
          partNumber: "53200-68P00",
          supersedes: "53200-72M00",
          price: 0,
          changeIntervalKm: 60000,
          changeIntervalMonths: 48,
          notes: "Drum shoes with self-adjusting mechanism."
        }
      ]
    },

    // -------------------------------------------------------------------------
    // 4. SUZUKI CELERIO (3rd Gen - AVK310 / 2023-2026)
    // -------------------------------------------------------------------------
    "celerio-2023-2026": {
      modelId: "celerio-2023-2026",
      name: "Suzuki Celerio (A-Segment Hatchback)",
      platformCode: "AVK310 (Heartect Platform)",
      years: ["2023", "2024", "2025", "2026"],
      engine: {
        code: "K10C DualJet",
        displacement: "1.0L 3-Cylinder 12V with Engine Auto Stop-Start (EASS)",
        oilCapacityWithFilterLiters: 2.9,
        oilViscosity: "0W-16 / 0W-20 API SP Full Synthetic",
        coolantCapacityLiters: 4.2
      },
      drivetrain: {
        transmissions: ["5-Speed Manual (5MT)", "Auto Gear Shift (5-Speed AGS)"],
        driveType: "Front-Wheel Drive (FWD)",
        manualTransFluid: "75W-80 API GL-4 (1.4 L)",
        agsFluid: "Suzuki Genuine AGS Hydraulic Fluid (0.5 L)"
      },
      parts: [
        {
          id: "CEL-ENG-OIL-FLT",
          category: "Filters",
          name: "Compact Engine Oil Filter",
          partNumber: "16510-84M00",
          supersedes: "16510-81420",
          price: 0,
          changeIntervalKm: 10000,
          changeIntervalMonths: 6,
          notes: "Specially designed short body for K10C engine block."
        },
        {
          id: "CEL-AIR-FLT",
          category: "Filters",
          name: "Air Cleaner Element",
          partNumber: "13780-62R00",
          supersedes: "13780-49S00",
          price: 0,
          changeIntervalKm: 30000,
          changeIntervalMonths: 24,
          notes: "Compact panel type filter."
        },
        {
          id: "CEL-CAB-FLT",
          category: "Filters",
          name: "Cabin AC Filter",
          partNumber: "95860-74P00",
          supersedes: "95860-62R00",
          price: 0,
          changeIntervalKm: 20000,
          changeIntervalMonths: 12,
          notes: "Replaces internal evaporator air filter."
        },
        {
          id: "CEL-SPK-PLG",
          category: "Ignition",
          name: "Iridium Spark Plugs (Set of 3)",
          partNumber: "09482-00647",
          supersedes: "ILZKR6F11",
          price: 0,
          changeIntervalKm: 60000,
          changeIntervalMonths: 48,
          notes: "Pack of 3 plugs for 3-cylinder K10C DualJet."
        },
        {
          id: "CEL-BRK-FRT",
          category: "Braking",
          name: "Front Disc Brake Pads",
          partNumber: "55810-62R00",
          supersedes: "55810-52R00",
          price: 0,
          changeIntervalKm: 30000,
          changeIntervalMonths: 24,
          notes: "Ceramic low-dust formulation."
        },
        {
          id: "CEL-BRK-RR",
          category: "Braking",
          name: "Rear Brake Shoes",
          partNumber: "53200-62R00",
          supersedes: "53200-68P00",
          price: 0,
          changeIntervalKm: 60000,
          changeIntervalMonths: 48,
          notes: "Leading/trailing shoe set."
        }
      ]
    },

    // -------------------------------------------------------------------------
    // 5. SUZUKI FRONX (A2V415 / 2024-2026)
    // -------------------------------------------------------------------------
    "fronx-2024-2026": {
      modelId: "fronx-2024-2026",
      name: "Suzuki Fronx Urban Crossover",
      platformCode: "A2V415 (Heartect Platform)",
      years: ["2024", "2025", "2026"],
      engine: {
        code: "K15B / K15C DualJet / 1.0L Boosterjet",
        displacement: "1.5L DualJet (Naturally Aspirated) / 1.0L Turbo",
        oilCapacityWithFilterLiters: 3.4,
        oilViscosity: "0W-16 / 0W-20 API SP Full Synthetic",
        coolantCapacityLiters: 4.8
      },
      drivetrain: {
        transmissions: ["5-Speed Manual (5MT)", "6-Speed Automatic (6AT) with Paddle Shifters"],
        driveType: "Front-Wheel Drive (FWD)",
        manualTransFluid: "75W API GL-4 (1.4 L)",
        autoTransFluid: "Suzuki Genuine ATF AW-1 (5.6 L)"
      },
      parts: [
        {
          id: "FRX-ENG-OIL-FLT",
          category: "Filters",
          name: "Engine Oil Filter",
          partNumber: "16510-81420",
          supersedes: "16510-84M00",
          price: 0,
          changeIntervalKm: 10000,
          changeIntervalMonths: 6,
          notes: "High-efficiency micro-pleat construction."
        },
        {
          id: "FRX-AIR-FLT",
          category: "Filters",
          name: "Engine Air Cleaner Element",
          partNumber: "13780-68P00",
          supersedes: "13780-62R00",
          price: 0,
          changeIntervalKm: 30000,
          changeIntervalMonths: 24,
          notes: "Panel filter element."
        },
        {
          id: "FRX-CAB-FLT",
          category: "Filters",
          name: "Cabin Air Conditioner Filter",
          partNumber: "95860-74P00",
          supersedes: "95860-74P00-000",
          price: 0,
          changeIntervalKm: 20000,
          changeIntervalMonths: 12,
          notes: "High PM2.5 capture rate filter."
        },
        {
          id: "FRX-BRK-FRT",
          category: "Braking",
          name: "Front Disc Brake Pads",
          partNumber: "55810-62R00",
          supersedes: "55810-52R00",
          price: 0,
          changeIntervalKm: 30000,
          changeIntervalMonths: 24,
          notes: "Low-metallic friction material with anti-squeal shims."
        },
        {
          id: "FRX-SPK-PLG",
          category: "Ignition",
          name: "Iridium Long-Life Spark Plugs",
          partNumber: "09482-00647",
          supersedes: "ILZKR6F11",
          price: 0,
          changeIntervalKm: 60000,
          changeIntervalMonths: 48,
          notes: "Direct replacement for K-Series DualJet configuration."
        }
      ]
    },

    // -------------------------------------------------------------------------
    // 6. SUZUKI SWIFT / DZIRE (ZC83S / ZCEDS / 2023-2026)
    // -------------------------------------------------------------------------
    "swift-dzire-2023-2026": {
      modelId: "swift-dzire-2023-2026",
      name: "Suzuki Swift / Dzire Sedan",
      platformCode: "ZC83S / ZCEDS / A2L412",
      years: ["2023", "2024", "2025", "2026"],
      engine: {
        code: "K12M (1.2L 4-Cyl) / Z12E (1.2L 3-Cyl Mild Hybrid)",
        displacement: "1.2L VVT",
        oilCapacityWithFilterLiters: 3.1,
        oilViscosity: "0W-16 / 0W-20 API SP ILSAC GF-6B",
        coolantCapacityLiters: 4.4
      },
      drivetrain: {
        transmissions: ["5-Speed Manual (5MT)", "Auto Gear Shift (AGS)", "Continuously Variable (CVT)"],
        driveType: "Front-Wheel Drive (FWD)",
        cvtFluid: "Suzuki CVT Fluid Green-2 (4.2 L service capacity)"
      },
      parts: [
        {
          id: "SWF-ENG-OIL-FLT",
          category: "Filters",
          name: "Engine Oil Filter Element",
          partNumber: "16510-84M00",
          supersedes: "16510-84MA0",
          price: 0,
          changeIntervalKm: 10000,
          changeIntervalMonths: 6,
          notes: "Specific to Z12E / K12M compact block."
        },
        {
          id: "SWF-AIR-FLT",
          category: "Filters",
          name: "Engine Air Intake Element",
          partNumber: "13780-53R00",
          supersedes: "13780-68P00",
          price: 0,
          changeIntervalKm: 30000,
          changeIntervalMonths: 24,
          notes: "High volumetric flow air cleaner."
        },
        {
          id: "SWF-CAB-FLT",
          category: "Filters",
          name: "HEPA Cabin Filter",
          partNumber: "95860-74P00",
          supersedes: "95861-53R00",
          price: 0,
          changeIntervalKm: 20000,
          changeIntervalMonths: 12,
          notes: "Glove compartment housing."
        },
        {
          id: "SWF-BRK-FRT",
          category: "Braking",
          name: "Front Disc Brake Pads",
          partNumber: "55810-53R00",
          supersedes: "55810-52R00",
          price: 0,
          changeIntervalKm: 30000,
          changeIntervalMonths: 24,
          notes: "Akishima / Akebono caliper set."
        },
        {
          id: "SWF-SPK-PLG",
          category: "Ignition",
          name: "Spark Plugs (Set of 4 for K12M)",
          partNumber: "09482-00647",
          supersedes: "KR6A-10",
          price: 0,
          changeIntervalKm: 60000,
          changeIntervalMonths: 48,
          notes: "Standard factory spec."
        }
      ]
    },

    // -------------------------------------------------------------------------
    // 7. SUZUKI S-PRESSO (A0K310 / 2023-2026)
    // -------------------------------------------------------------------------
    "spresso-2023-2026": {
      modelId: "spresso-2023-2026",
      name: "Suzuki S-Presso / S-Presso AGS",
      platformCode: "A0K310",
      years: ["2023", "2024", "2025", "2026"],
      engine: {
        code: "K10C DualJet 1.0L Engine with Auto Start-Stop",
        displacement: "998 cc 3-Cylinder",
        oilCapacityWithFilterLiters: 2.8,
        oilViscosity: "0W-16 / 0W-20 API SN/SP",
        coolantCapacityLiters: 4.1
      },
      drivetrain: {
        transmissions: ["5-Speed Manual (5MT)", "5-Speed Auto Gear Shift (AGS)"],
        driveType: "Front-Wheel Drive (FWD)",
        manualTransFluid: "75W-80 API GL-4 (1.3 L)",
        agsActuatorFluid: "Suzuki Genuine AGS Hydraulic Fluid (0.5 L)"
      },
      parts: [
        {
          id: "SPR-ENG-OIL-FLT",
          category: "Filters",
          name: "Compact Engine Oil Filter",
          partNumber: "16510-84M00",
          supersedes: "16510-81420",
          price: 0,
          changeIntervalKm: 10000,
          changeIntervalMonths: 6,
          notes: "Compact housing for transverse K10C layout."
        },
        {
          id: "SPR-AIR-FLT",
          category: "Filters",
          name: "Engine Air Cleaner Filter",
          partNumber: "13780-62R00",
          supersedes: "13780-68P00",
          price: 0,
          changeIntervalKm: 30000,
          changeIntervalMonths: 24,
          notes: "Direct intake element."
        },
        {
          id: "SPR-CAB-FLT",
          category: "Filters",
          name: "AC Cabin Air Filter",
          partNumber: "95860-74P00",
          supersedes: "95860-82P00",
          price: 0,
          changeIntervalKm: 20000,
          changeIntervalMonths: 12,
          notes: "Compact cabin element."
        },
        {
          id: "SPR-BRK-FRT",
          category: "Braking",
          name: "Front Disc Brake Pads",
          partNumber: "55810-68P00",
          supersedes: "55810-M68P00",
          price: 0,
          changeIntervalKm: 30000,
          changeIntervalMonths: 24,
          notes: "Akebono/TVS design."
        },
        {
          id: "SPR-SPK-PLG",
          category: "Ignition",
          name: "Iridium Spark Plugs (Set of 3)",
          partNumber: "09482-00647",
          supersedes: "ILZKR6F11",
          price: 0,
          changeIntervalKm: 60000,
          changeIntervalMonths: 48,
          notes: "3 plugs required for 3-cylinder K10C."
        }
      ]
    },

    // -------------------------------------------------------------------------
    // 8. SUZUKI CARRY UTILITY TRUCK / VAN (DC61T / 2023-2026)
    // -------------------------------------------------------------------------
    "carry-2023-2026": {
      modelId: "carry-2023-2026",
      name: "Suzuki Carry 1.5 Utility / Cargo",
      platformCode: "DC61T / DA16T",
      years: ["2023", "2024", "2025", "2026"],
      engine: {
        code: "K15B-C (Commercial Heavy-Duty Tune)",
        displacement: "1.5L 4-Cylinder DOHC 16V",
        oilCapacityWithFilterLiters: 3.8,
        oilViscosity: "5W-30 / 10W-40 Heavy Duty API SN/CK",
        coolantCapacityLiters: 5.4
      },
      drivetrain: {
        transmissions: ["5-Speed Manual (5MT) Longitudinal"],
        driveType: "Rear-Wheel Drive (RWD) Rigid Axle Leaf Spring",
        manualTransFluid: "SAE 75W-90 API GL-4 (1.6 L)",
        rearDiffFluid: "SAE 80W-90 API GL-5 Hypoid Gear Oil (1.5 L)"
      },
      parts: [
        {
          id: "CRY-ENG-OIL-FLT",
          category: "Filters",
          name: "Commercial Heavy-Duty Oil Filter",
          partNumber: "16510-81403",
          supersedes: "16510-81420",
          price: 0,
          changeIntervalKm: 5000,
          changeIntervalMonths: 3,
          notes: "Commercial duty cycles dictate shorter 5,000 km intervals."
        },
        {
          id: "CRY-AIR-FLT",
          category: "Filters",
          name: "Heavy-Duty Engine Air Filter",
          partNumber: "13780-77A00",
          supersedes: "13780-78A03",
          price: 0,
          changeIntervalKm: 20000,
          changeIntervalMonths: 12,
          notes: "Inspect and clean with low-pressure air every 5,000 km."
        },
        {
          id: "CRY-CLT-DSK",
          category: "Clutch",
          name: "Clutch Friction Disc (200mm)",
          partNumber: "22400-77A00",
          supersedes: "22400-78A21",
          price: 0,
          changeIntervalKm: 80000,
          changeIntervalMonths: 60,
          notes: "Inspect release bearing and pressure plate during clutch overhaul."
        },
        {
          id: "CRY-BRK-FRT",
          category: "Braking",
          name: "Heavy-Duty Front Brake Pad Set",
          partNumber: "55810-77A00",
          supersedes: "55810-76A11",
          price: 0,
          changeIntervalKm: 25000,
          changeIntervalMonths: 18,
          notes: "Commercial grade high friction coefficient."
        },
        {
          id: "CRY-BRK-RR",
          category: "Braking",
          name: "Rear Drum Heavy Commercial Shoe Set",
          partNumber: "53200-77A00",
          supersedes: "53200-77A01",
          price: 0,
          changeIntervalKm: 50000,
          changeIntervalMonths: 36,
          notes: "Reinforced drum shoes for rated payload."
        }
      ]
    },

    // -------------------------------------------------------------------------
    // 9. SUZUKI APV (GC415 / 2023-2026)
    // -------------------------------------------------------------------------
    "apv-2023-2026": {
      modelId: "apv-2023-2026",
      name: "Suzuki APV / APV Arena (Van & Utility)",
      platformCode: "GC415",
      years: ["2023", "2024", "2025", "2026"],
      engine: {
        code: "G16A",
        displacement: "1.6L 4-Cylinder SOHC 16V MPI",
        oilCapacityWithFilterLiters: 4.0,
        oilViscosity: "10W-40 / 15W-40 API SN/CF",
        coolantCapacityLiters: 6.2
      },
      drivetrain: {
        transmissions: ["5-Speed Manual (5MT)", "4-Speed Automatic (4AT)"],
        driveType: "Rear-Wheel Drive (RWD)",
        manualTransFluid: "75W-90 API GL-4 (1.5 L)",
        autoTransFluid: "Suzuki ATF 3317 (5.5 L)",
        rearDiffFluid: "SAE 80W-90 API GL-5 Hypoid (1.4 L)"
      },
      parts: [
        {
          id: "APV-ENG-OIL-FLT",
          category: "Filters",
          name: "Engine Oil Filter (G16A Block)",
          partNumber: "16510-61A31",
          supersedes: "16510-61A21",
          price: 0,
          changeIntervalKm: 10000,
          changeIntervalMonths: 6,
          notes: "Thread pitch 3/4-16 UNF for G-Series engines."
        },
        {
          id: "APV-AIR-FLT",
          category: "Filters",
          name: "Engine Air Cleaner Filter",
          partNumber: "13780-61J00",
          supersedes: "13780-61J00-000",
          price: 0,
          changeIntervalKm: 20000,
          changeIntervalMonths: 12,
          notes: "Round / cylindrical heavy duty element."
        },
        {
          id: "APV-SPK-PLG",
          category: "Ignition",
          name: "Nickel Spark Plugs (BKR6E-11)",
          partNumber: "09482-00494",
          supersedes: "BKR6E-11",
          price: 0,
          changeIntervalKm: 20000,
          changeIntervalMonths: 12,
          notes: "Replace every 20,000 km on non-iridium G-series specs."
        },
        {
          id: "APV-BRK-FRT",
          category: "Braking",
          name: "Front Brake Pad Set",
          partNumber: "55810-61J00",
          supersedes: "55810-61J10",
          price: 0,
          changeIntervalKm: 30000,
          changeIntervalMonths: 24,
          notes: "Heavy chassis disc brake pads."
        },
        {
          id: "APV-BRK-RR",
          category: "Braking",
          name: "Rear Drum Brake Shoe Set",
          partNumber: "53200-61J00",
          supersedes: "53200-61J01",
          price: 0,
          changeIntervalKm: 50000,
          changeIntervalMonths: 36,
          notes: "Commercial drum brake assembly."
        }
      ]
    }
  },

  // ---------------------------------------------------------------------------
  // HELPER METHODS FOR PWABuilder DASHBOARD & NOTIFICATIONS
  // ---------------------------------------------------------------------------
  helpers: {
    getModel(modelId) {
      return SUZUKI_CATALOG.models[modelId] || null;
    },

    getAllModels() {
      return Object.values(SUZUKI_CATALOG.models);
    },

    getAllPartsForModel(modelId) {
      const vehicle = SUZUKI_CATALOG.models[modelId];
      return vehicle ? vehicle.parts : [];
    },

    getDisclaimers() {
      return SUZUKI_CATALOG.meta.disclaimers;
    },

    getTaskStatus(currentOdoKm, lastServiceKm, intervalKm, lastServiceDate, intervalMonths) {
      const odoDelta = currentOdoKm - lastServiceKm;
      const kmRemaining = intervalKm - odoDelta;

      const now = new Date();
      const lastDate = new Date(lastServiceDate);
      const monthsElapsed = (now.getFullYear() - lastDate.getFullYear()) * 12 + (now.getMonth() - lastDate.getMonth());
      const monthsRemaining = intervalMonths - monthsElapsed;

      const isOverdue = kmRemaining <= 0 || monthsRemaining <= 0;
      const isDueSoon = (kmRemaining <= 1000 && kmRemaining > 0) || (monthsRemaining <= 1 && monthsRemaining > 0);

      return {
        isOverdue,
        isDueSoon,
        kmRemaining,
        monthsRemaining,
        status: isOverdue ? "OVERDUE" : isDueSoon ? "DUE_SOON" : "HEALTHY"
      };
    },

    generatePartPurchaseUrl(partNumber) {
      return `${SUZUKI_CATALOG.meta.shopBaseUrl}${encodeURIComponent(partNumber)}`;
    }
  }
};
