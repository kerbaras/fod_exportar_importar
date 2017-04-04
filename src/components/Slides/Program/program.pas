program Medicamentos;

type
	medicamento = record
		nombre: string[60];
		presentacion: string;
		fechaVto, stock: integer;
	end;

	archivo_medicamentos = file of medicamento;

procedure importar (VAR A: archivo_medicamentos; VAR T: text);
var
    reg: medicamento;
begin
    rewrite(A);
    reset(T);
    while not(EOF(T)) do begin
        readln(T, reg.nombre);
        readln(T, reg.fechaVto, reg.stock, reg.presentacion);
        write(A, reg);
    end;
    close(T);
    close(A);
end;

procedure exportar (VAR A: archivo_medicamentos; VAR T: text);
var
    reg: medicamento;
begin
    rewrite(T);
    reset(A);        
    while not(EOF(A)) do begin
        read(A, reg);
        writeln(T, reg.nombre);
        writeln(T, reg.fechaVto, ' ', reg.stock, ' ', reg.presentacion);
    end;
    close(A);
    close(T);
end;

function menu(): Byte;
var aux: Byte;
begin
     writeln;
     writeln('1. Importar archivo');
     writeln('2. Exportar');
     writeln('0. Salir');
     write('Ingrese opcion: ');
     readln(aux);
     menu := aux;
end;

var
   A: archivo_medicamentos;
   T, T2: text;
   salir: boolean;
begin
     writeln('MEDICAMENTOS');
     salir := false;
     Repeat
        Case menu() of
            1: begin  { Importacion }
                writeln;
                assign(A, 'c:\medicamentos');
                assign(T, 'c:\carga.txt');
                importar(A, T);
                writeln('Importacion exitosa.');
            end;
            2: begin  { Exportacion }
                writeln;
                assign(A, 'c:\medicamentos');
                assign(T2, 'c:\salida.txt');
                exportar(A, T2);
                writeln('Exportacion exitosa.');
            end;
            0: salir := true;
        end;
     until salir;
end.
