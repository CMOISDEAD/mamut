import matplotlib.pyplot as plt

# declare the file path
file_path = "../../data/times.txt"

algorithms = []
times = []
size = 0

with open(file_path, "r") as file:
    for line in file:
        # parse all the data
        parts = line.strip().split(" - ")
        size, rest = parts[0], parts[1]
        algo, time = rest.split(": ")

        # Add the data to the lists
        algorithms.append(algo)
        times.append(float(time))


plt.figure(figsize=(10, 6))
plt.barh(algorithms, times, color="skyblue")
plt.xlabel("Tiempo de ejecución (ms)")
plt.ylabel("Algoritmo")
plt.title(f"Tiempo de ejecución por algoritmo para un tamaño de {size} elementos")
plt.grid(axis="x", linestyle="--", alpha=0.7)

output_file = f"../../data/plots/{size}.png"
plt.tight_layout()
plt.savefig(output_file, dpi=300, bbox_inches="tight")

plt.show()
