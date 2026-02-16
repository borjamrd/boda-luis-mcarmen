"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { useState } from "react";
import { Loader2, CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/utils";

const formSchema = z.object({
  name: z.string().min(2, "El nombre es obligatorio"),
  attendance: z.enum(["yes", "no"], {
    message: "Por favor dinos si vienes",
  }),
  companions: z.string().optional(),
  allergies: z.string().optional(),
  bus: z.enum(["yes", "no"], {
    message: "Por favor indica si usarás el autobús",
  }),
  message: z.string().optional(),
});

type FormValues = z.infer<typeof formSchema>;

export function RSVPForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      attendance: undefined,
      companions: "",
      allergies: "",
      bus: undefined,
      message: "",
    },
  });

  async function onSubmit(data: FormValues) {
    setIsSubmitting(true);
    // Simulate API call
    console.log("Form Data:", data);
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setIsSubmitted(true);
  }

  if (isSubmitted) {
    return (
      <section id="rsvp" className="py-20 bg-wedding-cream/30">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-sm border border-wedding-gold/10">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 text-green-600">
              <CheckCircle2 size={32} />
            </div>
            <h3 className="text-2xl font-serif text-wedding-gold mb-2">
              ¡Gracias!
            </h3>
            <p className="opacity-80">
              Hemos recibido tu respuesta correctamente.
            </p>
            <Button
              variant="outline"
              className="mt-6"
              onClick={() => setIsSubmitted(false)}
            >
              Enviar otra respuesta
            </Button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="rsvp" className="py-20 bg-wedding-cream/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-serif text-wedding-gold mb-4">
            Confirmar Asistencia
          </h2>
          <p className="opacity-80 max-w-xl mx-auto">
            Por favor, confirma tu asistencia antes del 1 de octubre de 2026
            para que podamos organizarlo todo.
          </p>
        </div>

        <div className="max-w-2xl mx-auto bg-white p-6 md:p-10 rounded-xl shadow-sm border border-wedding-gold/10">
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            {/* Name */}
            <div className="space-y-2">
              <label htmlFor="name" className="text-sm font-medium">
                Nombre y Apellidos *
              </label>
              <Input
                id="name"
                placeholder="Tu nombre completo"
                {...form.register("name")}
                className={cn(form.formState.errors.name && "border-red-500")}
              />
              {form.formState.errors.name && (
                <p className="text-red-500 text-xs">
                  {form.formState.errors.name.message}
                </p>
              )}
            </div>

            {/* Attendance */}
            <div className="space-y-2">
              <label className="text-sm font-medium block">
                ¿Asistirás a nuestra boda? *
              </label>
              <div className="flex gap-4">
                <label className="flex items-center space-x-2 cursor-pointer">
                  <input
                    type="radio"
                    value="yes"
                    {...form.register("attendance")}
                    className="accent-wedding-gold w-4 h-4"
                  />
                  <span>Sí, ¡allí estaré!</span>
                </label>
                <label className="flex items-center space-x-2 cursor-pointer">
                  <input
                    type="radio"
                    value="no"
                    {...form.register("attendance")}
                    className="accent-wedding-gold w-4 h-4"
                  />
                  <span>Lo siento, no podré ir</span>
                </label>
              </div>
              {form.formState.errors.attendance && (
                <p className="text-red-500 text-xs">
                  {form.formState.errors.attendance.message}
                </p>
              )}
            </div>

            {/* Hidden fields if attendance is 'no' could be implemented, but kept simple for now */}

            {/* Companions */}
            <div className="space-y-2">
              <label htmlFor="companions" className="text-sm font-medium">
                ¿Vendrás acompañado? Nombres
              </label>
              <Input
                id="companions"
                placeholder="Nombre de tu acompañante (si aplica)"
                {...form.register("companions")}
              />
            </div>

            {/* Allergies */}
            <div className="space-y-2">
              <label htmlFor="allergies" className="text-sm font-medium">
                ¿Alguna intolerancia o alergia?
              </label>
              <Input
                id="allergies"
                placeholder="Gluten, lactosa, frutos secos..."
                {...form.register("allergies")}
              />
            </div>

            {/* Bus */}
            <div className="space-y-2">
              <label className="text-sm font-medium block">
                ¿Utilizarás el servicio de autobús? *
              </label>
              <div className="flex gap-4">
                <label className="flex items-center space-x-2 cursor-pointer">
                  <input
                    type="radio"
                    value="yes"
                    {...form.register("bus")}
                    className="accent-wedding-gold w-4 h-4"
                  />
                  <span>Sí</span>
                </label>
                <label className="flex items-center space-x-2 cursor-pointer">
                  <input
                    type="radio"
                    value="no"
                    {...form.register("bus")}
                    className="accent-wedding-gold w-4 h-4"
                  />
                  <span>No, iré por mi cuenta</span>
                </label>
              </div>
              {form.formState.errors.bus && (
                <p className="text-red-500 text-xs">
                  {form.formState.errors.bus.message}
                </p>
              )}
            </div>

            {/* Message */}
            <div className="space-y-2">
              <label htmlFor="message" className="text-sm font-medium">
                Déjanos un mensaje
              </label>
              <textarea
                id="message"
                rows={3}
                className="flex w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-wedding-gold disabled:cursor-not-allowed disabled:opacity-50"
                placeholder="¡Nos hace mucha ilusión!"
                {...form.register("message")}
              />
            </div>

            <Button type="submit" className="w-full" disabled={isSubmitting}>
              {isSubmitting ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Enviando...
                </>
              ) : (
                "Enviar Confirmación"
              )}
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}
