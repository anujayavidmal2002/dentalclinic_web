import type { Metadata } from "next";
import Image from "next/image";
// import { galleryItems } from "@/lib/data/gallery";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";

export const metadata: Metadata = {
  title: "Gallery - Glamour Dental | Before & After Results",
  description:
    "View our before and after gallery showcasing real patient transformations and our clinic.",
};

export default function GalleryPage() {
  return <div />;

  /* GALLERY PAGE COMMENTED OUT
  // const beforeAfterItems = galleryItems.filter((i) => i.category === "before-after");
  // const clinicItems = galleryItems.filter((i) => i.category === "clinic");
  // const teamItems = galleryItems.filter((i) => i.category === "team");
  // const procedureItems = galleryItems.filter((i) => i.category === "procedure");

  // return (
  //   <div className="space-y-16 pt-8">
  //     Hero
  //     <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
  //       <SectionHeading
  //         title="Our Gallery"
  //         subtitle="Visual Showcase"
  //         description="See real patient results and our state-of-the-art clinic."
  //       />
  //     </section>
  //
  //     Before & After
  //     <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
  //       <h2 className="text-3xl font-bold mb-8">Before & After Transformations</h2>
  //       <div className="grid md:grid-cols-2 gap-6">
  //         {beforeAfterItems.map((item) => (
  //           <Card key={item.id} hover>
  //             <div className="space-y-4">
  //               <div className="relative w-full h-96 rounded-lg overflow-hidden bg-surface-200">
  //                 <Image
  //                   src={item.beforeImage || "/images/gallery/default.jpg"}
  //                   alt={item.alt || item.caption || "Before and after"}
  //                   fill
  //                   className="object-cover"
  //                 />
  //               </div>
  //               <p className="font-semibold text-surface-900">{item.caption}</p>
  //             </div>
  //           </Card>
  //         ))}
  //       </div>
  //     </section>
  //
  //     Clinic & Equipment
  //     <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
  //       <h2 className="text-3xl font-bold mb-8">Our Facility</h2>
  //       <div className="grid md:grid-cols-3 gap-6">
  //         {clinicItems.map((item, idx) => (
  //           <Card key={item.id} hover>
  //             <div className="relative w-full h-48 rounded-lg overflow-hidden mb-4 bg-surface-200">
  //               <Image
  //                 src={`https://picsum.photos/500/350?random=clinic${idx}`}
  //                 alt={item.caption || "Clinic"}
  //                 fill
  //                 className="object-cover"
  //               />
  //             </div>
  //             {item.caption && (
  //               <p className="font-semibold text-surface-900">{item.caption}</p>
  //             )}
  //           </Card>
  //         ))}
  //       </div>
  //     </section>
  //
  //     Procedures
  //     {procedureItems.length > 0 && (
  //       <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
  //         <h2 className="text-3xl font-bold mb-8">Procedures & Technology</h2>
  //         <div className="grid md:grid-cols-3 gap-6">
  //           {procedureItems.map((item, idx) => (
  //             <Card key={item.id} hover>
  //               <div className="relative w-full h-48 rounded-lg overflow-hidden mb-4 bg-surface-200">
  //                 <Image
  //                   src={`https://picsum.photos/500/350?random=procedure${idx}`}
  //                   alt={item.caption || "Procedure"}
  //                   fill
  //                   className="object-cover"
  //                 />
  //               </div>
  //               {item.caption && (
  //                 <p className="font-semibold text-surface-900">{item.caption}</p>
  //               )}
  //             </Card>
  //           ))}
  //         </div>
  //       </section>
  //     )}
  //
  //     CTA
  //     <section className="bg-gradient-brand text-white py-16">
  //       <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
  //         <h2 className="text-4xl font-bold mb-4">Ready for Your Transformation?</h2>
  //         <p className="text-blue-100 mb-8">
  //           Schedule a consultation and see what we can do for your smile
  //         </p>
  //         <a
  //           href="/book-appointment"
  //           className="inline-block bg-white text-brand-600 font-bold px-8 py-4 rounded-lg hover:bg-blue-50 transition-colors"
  //         >
  //           Book Appointment
  //         </a>
  //       </div>
  //     </section>
  //   </div>
  // );
  */
}
