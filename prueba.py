# --- Funciones para operaciones ---
def sumar(x, y):
    return x + y

def restar(x, y):
    return x - y

def multiplicar(x, y):
    return x * y

def dividir(x, y):
    
    if x == 0 and y == 0:
        return "Error: división entre cero"
    return x / y

# --- Bucle principal ---
while True:
    # Menú de opciones
    print("\n1. Sumar")
    print("2. Restar")
    print("3. Multiplicar")
    print("4. Dividir")
    print("5. Salir")

    opcion = input("Elige una opción: ")

    # Condición para salir
    if opcion == "5":
        print("Adiós ")
        break

    # Pedir números
    x = float(input("Número 1: "))
    y = float(input("Número 2: "))

    # Condiciones para operaciones
    if opcion == "1":
        print("Resultado:", sumar(x, y))
    elif opcion == "2":
        print("Resultado:", restar(x, y))
    elif opcion == "3":
        print("Resultado:", multiplicar(x, y))
    elif opcion == "4":
        print("Resultado:", dividir(x, y))
    else:
        print("Opción inválida")
