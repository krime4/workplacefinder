export interface Job {
  id: number;
  title: string;
  company: string;
  location: string;
  posted: string;
  salary: string;
  type: string;
  description: string;
}

export const jobs: Job[] = [
  {
    id: 1,
    title: "Cashier",
    company: "Kwik Trip",
    location: "Marshfield, WI",
    posted: "January 8, 2003",
    salary: "$7.25/hr",
    type: "Part-Time",
    description:
      "Operate cash register, handle customer transactions, stock shelves and maintain a clean storefront. Friendly demeanor and reliable transportation required. Morning and evening shifts available.",
  },
  {
    id: 2,
    title: "Forklift Operator",
    company: "Hamlin Plastics",
    location: "Marshfield, WI",
    posted: "February 22, 2003",
    salary: "$11.00/hr",
    type: "Full-Time",
    description:
      "Operate sit-down forklift to move raw materials and finished product throughout the warehouse. Must hold a valid forklift certification or be willing to complete on-site training within 30 days.",
  },
  {
    id: 3,
    title: "Line Cook",
    company: "Culver's",
    location: "Wisconsin Rapids, WI",
    posted: "March 15, 2003",
    salary: "$8.50/hr",
    type: "Full-Time",
    description:
      "Prepare menu items to order, maintain kitchen sanitation standards, and assist with prep work. Fast-paced environment. Previous restaurant experience preferred but not required.",
  },
  {
    id: 4,
    title: "Receptionist",
    company: "Westfield Clinic",
    location: "Westfield, WI",
    posted: "April 5, 2003",
    salary: "$9.75/hr",
    type: "Full-Time",
    description:
      "Greet patients, schedule appointments, answer multi-line phone system, and manage insurance paperwork. Professional phone manner and basic computer skills essential.",
  },
  {
    id: 5,
    title: "Warehouse Associate",
    company: "Fleet Farm",
    location: "Marshfield, WI",
    posted: "May 19, 2003",
    salary: "$9.00/hr",
    type: "Full-Time",
    description:
      "Receive, unload, and organize incoming freight. Pick and pack orders for store replenishment. Must be able to lift up to 50 lbs repeatedly. Steel-toe boots required.",
  },
  {
    id: 6,
    title: "Night Guard",
    company: "Freddy's Family Diner",
    location: "Westfield, WI",
    posted: "October 14, 2003",
    salary: "$12.50/hr",
    type: "Part-Time",
    description:
      "Night shift security and maintenance position. Duties include securing the premises after closing, performing routine janitorial duties (mopping floors, cleaning restrooms, emptying trash), light maintenance of equipment, and monitoring the building through the overnight hours. Reliable, detail-oriented individuals encouraged to apply. Must be comfortable working alone for extended periods. Hours: 10:00 PM - 6:00 AM.",
  },
  {
    id: 7,
    title: "Delivery Driver",
    company: "Pizza Hut",
    location: "Stevens Point, WI",
    posted: "July 3, 2003",
    salary: "$6.50/hr + tips",
    type: "Part-Time",
    description:
      "Deliver orders to residential and commercial addresses in a timely manner. Assist with in-store duties during non-delivery periods. Valid driver's license, clean driving record, and insured vehicle required.",
  },
  {
    id: 8,
    title: "Dental Assistant",
    company: "Smiles Dental",
    location: "Marshfield, WI",
    posted: "August 27, 2003",
    salary: "$12.00/hr",
    type: "Full-Time",
    description:
      "Assist the dentist during procedures, prepare treatment rooms, sterilize instruments, and take dental X-rays. CPR certification preferred. Warm chairside manner a must.",
  },
  {
    id: 9,
    title: "Machine Operator",
    company: "Marshfield Metalworks",
    location: "Marshfield, WI",
    posted: "September 12, 2003",
    salary: "$13.50/hr",
    type: "Full-Time",
    description:
      "Set up and operate CNC press brakes and lathes. Inspect finished parts for quality conformance. Ability to read blueprints a plus. Safety-conscious attitude mandatory.",
  },
  {
    id: 10,
    title: "Customer Service Rep",
    company: "Frontier Communications",
    location: "Wisconsin Rapids, WI",
    posted: "November 6, 2003",
    salary: "$10.50/hr",
    type: "Full-Time",
    description:
      "Handle inbound customer calls regarding billing and service inquiries. Document call details and resolve issues or escalate as needed. Strong typing skills and patience required.",
  },
  {
    id: 11,
    title: "Stock Clerk",
    company: "Piggly Wiggly",
    location: "Westfield, WI",
    posted: "December 1, 2003",
    salary: "$7.50/hr",
    type: "Part-Time",
    description:
      "Stock shelves, rotate product, build displays, and assist customers locating items. Early morning shift. Ability to work efficiently with minimal supervision.",
  },
  {
    id: 12,
    title: "Welder",
    company: "Central Welding",
    location: "Marshfield, WI",
    posted: "June 18, 2003",
    salary: "$15.00/hr",
    type: "Full-Time",
    description:
      "MIG and TIG welding on structural steel components. Read and interpret welding symbols. Must provide own helmet and gloves. 2+ years experience required.",
  },
  {
  id: 13,
  title: "Therapist",
  company: "Harmony Health Counseling",
  location: "Westfield, WI",
  posted: "June 28, 2003",
  salary: "$25.50/hr",
  type: "Full-Time",
  description: "Compassionate and client-focused therapist dedicated to helping individuals overcome emotional and behavioral challenges. Experienced in providing confidential, evidence-based counseling, developing individualized treatment plans, and creating a safe, supportive environment for clients. Strong communication and active-listening skills with a commitment to helping clients build healthy coping strategies, improve emotional well-being, and achieve meaningful personal growth.",
  }
];
